const axios = require('axios');
require('dotenv').config();

async function executePayment(payment_id, id_token) {
    const url = 'https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/execute';
    const headers = {
        'Accept': 'application/json',
        'authorization': id_token,
        'x-app-key': process.env.APP_KEY,
    };
    const body = {
        paymentID: payment_id
    };

    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error('Error executing payment:', error);
        throw error;
    }
}

module.exports = executePayment;