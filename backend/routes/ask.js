const express = require("express");
const router = express.Router();

const isUnsafeQuery = require("../safety");
const retrieveContext = require("../../rag/retrieve");

router.post("/", async (req, res) => {
  const { question } = req.body;

  const unsafe = isUnsafeQuery(question);
  const context = retrieveContext(question);

  let answer = "";

  if (unsafe) {
    answer =
      "⚠️ This question involves a health condition. Yoga can be risky in such cases. Please consult a doctor or certified yoga instructor before trying any poses.";
  } else {
    answer =
      "Based on yoga knowledge, here is a helpful answer related to your question.";
  }

  res.json({
    answer,
    sources: context.map(c => c.title),
    isUnsafe: unsafe
  });
});

module.exports = router;
