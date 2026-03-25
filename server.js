const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("HealthConnect Backend Running 🚀");
});

// AI route (demo)
app.post("/ai", (req, res) => {
  const { message } = req.body;

  let reply = "Please consult a doctor.";

  if (message.toLowerCase().includes("fever")) {
    reply = "You may have a viral infection. Stay hydrated and rest.";
  }

  if (message.toLowerCase().includes("headache")) {
    reply = "It could be stress or dehydration. Drink water and relax.";
  }

  res.json({ reply });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

         
      
