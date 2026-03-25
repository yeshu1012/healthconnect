
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>HealthConnect</title>
      </head>
      <body style="text-align:center; font-family:Arial; margin-top:50px;">
        <h1 style="color:green;">🚀 HealthConnect Ultra</h1>
        <p>Your server is running successfully!</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
