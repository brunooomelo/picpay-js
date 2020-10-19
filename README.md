
# PicPay - E-Commerce Javascript

A JavaScript library to interface with picpay's API, it works with Node.js.

The documentation can be found in the [docs](https://ecommerce.picpay.com/doc)


## Description

This library covers all your needs for integrating with PicPay E-commerce, providing:

* A clean Promise-based interface for all endpoints in Picpay's API

## How to use

First, install it:

```bash
yarn add picpay-js
```

Or using npm:

```bash
npm install picpay-js
```

### Node.js

Import like usual:

```js
import picpay from 'picpay-js'
```

also works using `require`:

```js
const picpay = require('picpay-js')
```

## API Docs

This library provides a promise based interface for all functions. Before you
can use the library, you need to provide authentication details which will be
used through API calls.

For a detailed documentation, see the [docs](https://ecommerce.picpay.com/docs).

#### Using create transaction:

```javascript
import picpay from 'picpay-js'

picpay.connect(API_KEY)
  .then(client => client.transaction.create({
    "referenceId": "102030",
    "callbackUrl": "http://www.sualoja.com.br/callback",
    "returnUrl": "http://www.sualoja.com.br/cliente/pedido/102030",
    "value": 20.51,
    "expiresAt": "2022-05-01T16:00:00-03:00",
    "buyer": {
      "firstName": "João",
      "lastName": "Da Silva",
      "document": "123.456.789-10",
      "email": "teste@picpay.com",
      "phone": "+55 27 12345-6789"
      }
  }))
  .then(transactions => console.log(transactions))
  .catch(error => console.error(error))
```


#### Using refund transaction:

```javascript
import picpay from 'picpay-js'

const referenceId = "102030"
picpay.connect(API_KEY)
  .then(client => client.transaction.refund(referenceId,{
    "authorizationId": "555008cef7f321d00ef236333" // optional
  }))
  .then(transactions => console.log(transactions))
  .catch(error => console.error(error))
```

#### Using status:

```javascript
import picpay from 'picpay-js'

const referenceId = "102030"
picpay.connect(API_KEY)
  .then(client => client.transaction.status(referenceId)
  .then(transactions => console.log(transactions))
  .catch(error => console.error(error))
```

## License

```
The MIT License (MIT)
```
