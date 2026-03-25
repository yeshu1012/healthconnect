
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>HealthConnect</title>
      <style>
        body {
          margin: 0;
          font-family: Arial;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background: white;
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 {
          color: #333;
        }
        p {
          color: gray;
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          background: #4facfe;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background: #007bff;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 HealthConnect Ultra</h1>
        <p>Your server is running successfully!</p>
        <button onclick="alert('Welcome to HealthConnect!')">
          Get Started
        </button>
      </div>
    </body>
  </html>
`);
