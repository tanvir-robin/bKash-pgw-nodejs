# 🔒 bKash PGW Payment Gateway Backend

Simplify your bKash PGW payment integration with this ready-to-use Node.js backend. Built for developers who want a reliable, easy-to-implement payment solution.

## ✨ Features

- 💳 Easy-to-use bKash PGW integration
- 🔐 Secure payment processing
- ⚙️ Environment-based configuration
- 🚀 Production-ready with Vercel deployment
- 🌐 CORS enabled for cross-origin requests
- 🛠️ Built with modern JavaScript

## 🔧 Tech Stack

- 📦 Node.js
- ⚡ Express.js
- 🔄 Axios for HTTP requests
- 🌍 CORS for cross-origin support
- 🔑 dotenv for environment management

## 📋 Prerequisites

- 📌 Node.js (v14 or higher)
- 📦 npm (Node Package Manager)
- 🎫 bKash PGW credentials
- 💡 Basic knowledge of REST APIs

## 🚀 Getting Started

### 📥 Clone the Repository

```bash
git clone https://github.com/tanvir-robin/bKash-pgw-nodejs.git
cd bkash-pgw-backend
```

### 📦 Install Dependencies

```bash
npm install
```

### ⚙️ Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
APP_KEY=<API_KEY_FROM_PGW>
APP_SECRET=<YOUR_APP_SECRET>
USERNAME=<YOUR_USERNAME>
PASSWORD=<YOUR_PASSWORD>
```

⚠️ **Important**: Never commit your `.env` file to version control!

### 💻 Development

Run the server with hot-reload using nodemon:

```bash
npm start
```

The server will start on `http://localhost:3000` (or your configured port)

## 📦 Dependencies

```json
{
  "dependencies": {
    "axios": "^1.7.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```

## 🛣️ API Endpoints

### 1. 🔗 Create Payment Link
```http
POST /initiate
```

Creates a bKash payment link for transaction initiation.

#### Request Body
```json
{
    "payerReference": "Customer123",
    "callbackURL": "https://example.com/callback",
    "amount": "1000",
    "merchantInvoiceNumber": "INV-123456"
}
```

#### Sample cURL Request
```bash
curl --location 'https://your-api-url/initiate' \
--header 'Content-Type: application/json' \
--data '{
    "payerReference": "Customer123",
    "callbackURL": "https://example.com/callback",
    "amount": "1000",
    "merchantInvoiceNumber": "INV-123456"
}'
```

#### Success Response
```json
{
    "status": "success",
    "statusCode": 200,
    "paymentID": "TR0011kMH7LtQ1731358567158",
    "paymentCreateTime": "2024-03-20T10:30:15:000 GMT+0600",
    "transactionStatus": "Initiated",
    "amount": "1000",
    "currency": "BDT",
    "paymentExecuteURL": "https://tokenized.pay.bka.sh/checkout/payment/execute/TR0011..."
}
```
> Access token will be generated in the backend and used automatically. No need to worry about it.


### 2. ✅ Execute Payment
```http
POST /execute
```

Executes a previously initiated bKash payment.

#### Request Body
```json
{
    "paymentID": "TR0011kMH7LtQ1731358567158"
}
```

#### Sample cURL Request
```bash
curl --location 'https://your-api-url/execute' \
--header 'Content-Type: application/json' \
--data '{
    "paymentID": "TR0011kMH7LtQ1731358567158"
}'
```

#### Success Response
```json
{
    "status": "success",
    "statusCode": 200,
    "paymentID": "TR0011kMH7LtQ1731358567158",
    "trxID": "BK0001XX2ZY",
    "transactionStatus": "Completed",
    "amount": "1000",
    "currency": "BDT",
    "intent": "sale",
    "merchantInvoiceNumber": "INV-123456"
}
```

> Access token will be generated in the backend and used automatically. No need to worry about it.

## 🌐 Deployment

This backend can be deployed to any hosting platform of your choice. However, I recommend Vercel for its excellent free tier (Hobby plan) and seamless deployment process. The project includes a `vercel.json` configuration file, making it ready for Vercel deployment out of the box.

### 🚀 Deploying to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy:
```bash
vercel
```

5. Add your environment variables in the Vercel dashboard under Project Settings > Environment Variables.

> **Note**: The included `vercel.json` handles all the necessary configuration for Vercel deployment. You don't need to modify any additional settings.

### 🌍 Other Hosting Platforms

You can deploy this backend to any hosting platform that supports Node.js applications, such as:
- Heroku
- Digital Ocean
- AWS
- Google Cloud
- Azure

Just follow your preferred platform's Node.js deployment guidelines.

## 🔑 API Configuration

Ensure you have the following from bKash PGW:
- 🔐 API Key
- 🎴 App Secret
- 👤 Username
- 🔒 Password

These credentials should be added to your environment variables as shown in the Environment Setup section.

## 🤝 Contributing

1. 🔱 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 📫 Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

For support:
- 📧 Email: tanvir.rrrabin@gmail.com 
- 🐛 Open an issue in the repository
- 💭 Start a discussion

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---
Made with ❤️ by Robin | © 2024 All rights reserved
