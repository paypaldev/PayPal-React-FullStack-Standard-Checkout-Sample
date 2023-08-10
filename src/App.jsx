import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
}

function App() {
  const initialOptions = {
    'client-id': 'PAYPAL_CLIENT_ID',
    'enable-funding': 'paylater,venmo',
    'data-sdk-integration-source': 'integrationbuilder_ac',
  };

  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            //color:'blue' change the default color of the buttons
            layout: 'vertical', //default value. Can be changed to horizontal
          }}
          createOrder={async () => {
            try {
              const response = await fetch('/api/orders', {
                method: 'POST',
                'Content-Type': 'application/json',
                // use the 'body' param to optionally pass additional order information
                // like product ids and quantities
                body: JSON.stringify({
                  cart: [
                    {
                      id: 'YOUR_PRODUCT_ID',
                      quantity: 'YOUR_PRODUCT_QUANTITY',
                    },
                  ],
                }),
              });

              const details = await response.json();
              return details.id;
            } catch (error) {
              console.error(error);
              // Handle the error or display an appropriate error message to the user
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await fetch(
                `/api/orders/${data.orderID}/capture`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              );

              const details = await response.json();
              // Three cases to handle:
              //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              //   (2) Other non-recoverable errors -> Show a failure message
              //   (3) Successful transaction -> Show confirmation or thank you message

              // This example reads a v2/checkout/orders capture response, propagated from the server
              // You could use a different API or structure for your 'orderData'
              const errorDetail =
                Array.isArray(details.details) && details.details[0];

              if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                return actions.restart();
                // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
              }

              if (errorDetail) {
                let msg = 'Sorry, your transaction could not be processed.';
                msg += errorDetail.description
                  ? ' ' + errorDetail.description
                  : '';
                msg += details.debug_id ? ' (' + details.debug_id + ')' : '';
                setMessage(msg);
              }

              // Successful capture! For demo purposes:
              console.log(
                'Capture result',
                details,
                JSON.stringify(details, null, 2),
              );
              const transaction =
                details.purchase_units[0].payments.captures[0];
              let msg =
                'Transaction ' +
                transaction.status +
                ': ' +
                transaction.id +
                '. See console for all available details';
              setMessage(msg);
            } catch (error) {
              console.error(error);
              // Handle the error or display an appropriate error message to the user
            }
          }}
        />
        <Message content={message} />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
