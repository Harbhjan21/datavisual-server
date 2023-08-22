const mongoose = require("mongoose");

const schema = mongoose.Schema;

const dataSchema = new schema({
  end_year: { type: String, default: "" },
  intensity: { type: Number, default: 0 },
  sector: { type: String, default: "Unknown" },
  topic: { type: String, default: "Unknown" },
  insight: { type: String, default: "No insight available" },
  url: { type: String, default: "" },
  region: { type: String, default: "Unknown" },
  start_year: { type: String, default: "" },
  impact: { type: String, default: "No impact information" },
  added: { type: String, default: "" },
  published: { type: String, default: "" },
  country: { type: String, default: "Unknown" },
  relevance: { type: Number, default: 0 },
  pestle: { type: String, default: "Unknown" },
  source: { type: String, default: "Unknown" },
  title: { type: String, default: "Unknown" },
  likelihood: { type: Number, default: 0 },
});

module.exports = mongoose.model("Data", dataSchema);
