const axios = require('axios');
require('dotenv').config();

async function grantToken() {
    const url = 'https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant';
    const headers = {
        'Accept': 'application/json',
        'username': process.env.USERNAME,
        'password': process.env.PASSWORD,
        'Content-Type': 'application/json'
    };
    const body = {
        app_key: process.env.APP_KEY,
        app_secret: process.env.APP_SECRET
    };

    try {
        const response = await axios.post(url, body, { headers });
        return response.data.id_token;
    } catch (error) {
        console.error('Error granting token:', error);
        throw error;
    }
}

module.exports = grantToken;