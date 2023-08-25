![PayPal Developer Cover](https://github.com/paypaldev/.github/blob/main/pp-cover.png)

<div align="center">
  <a href="https://twitter.com/paypaldev" target="_blank">
    <img alt="Twitter: PayPal Developer" src="https://img.shields.io/twitter/follow/paypaldev?style=social" />
  </a>
  <br />
  <a href="https://twitter.com/paypaldev" target="_blank">Twitter</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://www.paypal.com/us/home" target="_blank">PayPal</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://developer.paypal.com/home" target="_blank">Docs</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://github.com/paypaldev" target="_blank">Code Samples</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://dev.to/paypaldeveloper" target="_blank">Blog</a>
  <br />
  <hr />
</div>

# PayPal React (NodeJS) FullStack Standard Checkout

This sample app shows you how to integrate PayPal into your React app for the [standard checkout](https://developer.paypal.com/docs/checkout/standard/integrate/) workflow.

## Run this project

### PayPal Codespaces
[![Open Code In GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypaldev/PayPal-React-FullStack-Standard-Checkout-Sample?devcontainer_path=.devcontainer%2Fdevcontainer.json)

### Locally

Follow the instructions below.

### Config Frontend

- Rename the `.env.example` file to `.env`.
- Inside of `the App.jsx` file, enter your PayPal `client-id` inside the `initialOptions` object.
- Run npm install in your terminal
- Run npm start in your terminal (this will run the server separetly from the backend)

### Config Backend

- Rename the `.env.example` file to .env.
- Inside of the `.env` file, enter your PayPal client ID for the `PAYPAL_CLIENT_ID` and your PayPal app secret for the `PAYPAL_CLIENT_SECRET` enviroment variables.
- Run npm install in your terminal
- Run npm start in your terminal (this will run the server separetly from the frontend)

### Run app

In the root folder, run `npm start` in your terminal. This will run the backend and frontend at the same time.

- Navigate in your browswer to `http://localhost:3000/`
- I'm able to have my frontend and backend server similute they are in the same server port by adding `"proxy": "http://localhost:9597"` to my frontend `package.json`.

### Sample Card

Card Type: `Visa`

Card Number: `5458406954745076`

Expiration Date: `01/2025`

CVV: `123`

## PayPal Developer Community

The PayPal Developer community helps you build your career while improving your products and the developer experience. You’ll be able to contribute code and documentation, meet new people and learn from the open-source community.

- Website: [developer.paypal.com](https://developer.paypal.com)
- Twitter: [@paypaldev](https://twitter.com/paypaldev)
- GitHub: [@paypal](https://github.com/paypal)
