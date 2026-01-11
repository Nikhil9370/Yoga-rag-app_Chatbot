const express = require("express");
const cors = require("cors");   
const app = express();

app.use(cors());                
app.use(express.json());

const askRoute = require("./routes/ask");
app.use("/ask", askRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Yoga RAG Backend is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
