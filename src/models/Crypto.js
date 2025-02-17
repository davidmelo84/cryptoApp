const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
  marketCap: Number,
  change24h: Number,
  change7d: Number,
  allTimeHigh: Number,
  allTimeLow: Number,
  currentPrice: Number,
});

module.exports = mongoose.model('Crypto', CryptoSchema);
