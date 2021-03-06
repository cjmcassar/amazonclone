const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IlCLkBU9OeIRUrJjk8qaw5M0Ra5KgwRUoypUKrf540fKLQNkjbo14cvRHWkmeLXMCU0NeObbH3A2nv78dWhRb4J000DD944NM"
);

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hellow world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //Subunits of the currency
    currency: "usd",
  });

  //OK - Created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command

exports.api = functions.https.onRequest(app);

//Example endpoit:
//http://localhost:5001/challenge-384e4/us-central1/api
