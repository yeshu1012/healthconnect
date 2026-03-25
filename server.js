
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
🚀 After that
Click Commit changes (green button)
Go to Render → wait 10–20 sec
Refresh your live link
💡 Important
❌ Don’t delete express setup
❌ Don’t delete app.listen
✅ Only change res.send()

If you want, next I can help you make it look like a real app UI (login page, navbar, colors, animations) 😎
