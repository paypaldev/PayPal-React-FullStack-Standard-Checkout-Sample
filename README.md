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

- Rename the `.env.example` file to `.env`.
- Add your enviroment variables in the .env file.

### Locally

Follow the instructions below.

First, install the frontend and backend dependencies with `npm install`.

### Config Frontend

- Inside of the `client/App.jsx` file, enter your PayPal `client-id` inside the `initialOptions` object.

### Config Backend

- Rename the `.env.example` file to .env.
- Inside the `.env` file, enter your PayPal client ID for the `PAYPAL_CLIENT_ID` and your PayPal app secret for the `PAYPAL_CLIENT_SECRET` environment variables.

### Run app

In the root folder, run `npm start` in your terminal. This will run the backend and frontend at the same time.

- Navigate in your browser to `http://localhost:3000/`

### Sample Card

Card Type: `Visa`

Card Number: `5458406954745076`

Expiration Date: `01/2025`

CVV: `123`

## PayPal Developer Community

The PayPal Developer community helps you build your career while improving your products and the developer experience. You’ll be able to contribute code and documentation, meet new people, and learn from the open-source community.

- Website: [developer.paypal.com](https://developer.paypal.com)
- Twitter: [@paypaldev](https://twitter.com/paypaldev)
- GitHub: [@paypal](https://github.com/paypal)
