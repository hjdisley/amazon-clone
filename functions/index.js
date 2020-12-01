const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HtVqaIhvvofoJrikO6tlPChmfKay1TkubKNzmGpsANr31WTy53yHv7ZOJahSNULmukEx8Jw11h71c9cxv2pHhvV00IKYG9KVA'
);

//app config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (req, res) => res.status(200).send('working'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('payment received, amount: >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'gbp',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//app listen
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-6673c/us-central1/api
