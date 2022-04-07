import axios from "axios";

const useCoingecko = () => {
  const fetchCoinData = async (id: string) => {
    try {
      const coin = await axios.get('https://deep-index.moralis.io/api/v2/erc20/0xcB2aDBCa6f15E9B3F1D98FcE57aC48a093F34fA9/price?chain=bsc&exchange=Pancakeswap', {
        headers: {
          'X-API-Key': '30Gj6TFjr7ZG7F4KyEP19HNuSuc5f2UC3VYpcPqww3IJlpIkOImimChpNNzgm5Cv'
        }
      }
      );
      return coin.data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCoinChart = async (id: string) => {
    try {
      const chart = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=hourly`
        // 'https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/0xcB2aDBCa6f15E9B3F1D98FcE57aC48a093F34fA9/market_chart/?vs_currency=usd&days=1'
      );
      // console.info("chart res", chart.status)
      return chart.data;
    } catch (error) {
      console.error(error);
    }
  };


  return {
    fetchCoinData,
    fetchCoinChart
  };
};

export default useCoingecko;
