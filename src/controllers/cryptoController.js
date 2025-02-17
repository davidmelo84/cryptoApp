const axios = require('axios');

exports.getCryptos = async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10, page: 1, sparkline: false }
    });

    const cryptos = response.data.map(coin => ({
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      change7d: coin.price_change_percentage_7d,
      allTimeHigh: coin.ath,
      allTimeLow: coin.atl,
      currentPrice: coin.current_price,
    }));

    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
};
