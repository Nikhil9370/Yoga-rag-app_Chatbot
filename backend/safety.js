const unsafeKeywords = [
  "pregnant",
  "pregnancy",
  "bp",
  "blood pressure",
  "high bp",
  "hernia",
  "surgery",
  "glaucoma"
];

function isUnsafeQuery(question) {
  const q = question.toLowerCase();
  return unsafeKeywords.some(word => q.includes(word));
}

module.exports = isUnsafeQuery;
