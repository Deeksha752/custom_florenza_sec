require("dotenv").config();
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(express.json());

// Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID || "your_account_sid";
const authToken = process.env.TWILIO_AUTH_TOKEN || "your_auth_token";
const client = twilio(accountSid, authToken);
const fromPhone = process.env.TWILIO_FROM_PHONE || "+1234567890";

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.post("/order", async (req, res) => {
  const { name, design, size, color, image } = req.body;

  console.log("New Order Received:", { name, design, size, color, image });

  // Fake WhatsApp notification (logged)
  console.log(`📲 Fake WhatsApp: Hi ${name}, your T-shirt order is confirmed 👕`);

  res.send("Order placed successfully!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});