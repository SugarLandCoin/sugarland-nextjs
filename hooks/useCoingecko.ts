import axios from "axios";

const useCoingecko = () => {
  const fetchCoinData = async (id: string) => {
    console.log(id);
    try {
      const coin = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&community_data=false&developer_data=false&sparkline=false`
        // 'https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/0xcB2aDBCa6f15E9B3F1D98FcE57aC48a093F34fA9'
      );
      return coin.data.market_data;
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
