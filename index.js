const express = require('express');
var cors = require('cors')

const grantToken = require('./functions/grant_tocken');
const createPayment = require('./functions/create_payment');
const executePayment = require('./functions/execute_payment');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.post('/initiate', (req, res) => {
    const { payerReference, callbackURL, amount, merchantInvoiceNumber } = req.body;

    grantToken()
        .then((id_token) => {
            const paymentBody = {
                mode: '0011',
                payerReference: payerReference,
                callbackURL: callbackURL,
                amount: amount,
                currency: 'BDT',
                intent: 'sale',
                merchantInvoiceNumber: merchantInvoiceNumber
            };
            createPayment(id_token, paymentBody)
                .then((response) => {
                    res.send(response);
                })
                .catch((error) => {
                    res.send(`Error: ${error.message}`);
                });
        })
        .catch((error) => {
            res.send(`Error: ${error.message}`);
        });
});

app.post('/execute', (req, res) => {
    const { paymentID } = req.body;

    grantToken()
        .then((id_token) => {
            executePayment(paymentID, id_token)
                .then((response) => {
                    res.send(response);
                })
                .catch((error) => {
                    res.send(`Error: ${error.message}`);
                });
        })
        .catch((error) => {
            res.send(`Error: ${error.message}`);
        });
});


app.listen(3000);