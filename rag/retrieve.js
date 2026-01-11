const yogaData = require("../dataset/yoga_articles.json");

function retrieveContext(question) {
  const q = question.toLowerCase();

  const results = yogaData.filter(item =>
    item.content.toLowerCase().includes(q) ||
    item.title.toLowerCase().includes(q)
  );

  return results.slice(0, 3);
}

module.exports = retrieveContext;
