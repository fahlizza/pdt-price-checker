const axios = require('axios');

async function getBlzPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bluzelle&vs_currencies=usd');
    const blzPrice = response.data.bluzelle.usd;
    return blzPrice;
  } catch (error) {
    console.error('Error retrieving BLZ price:', error);
    throw error;
  }
}

module.exports = {
  getBlzPrice
};
