import axios from "axios";

const useReflection = (props:any) => {
    let walletAddress = props;
    let coinAddress = '0x59eB96F0B6f5838021f0E8f412Afe65D1Bf44A02' //sugarland
    const apiToken = 'JZ4J2AWVAU7UIIHXB5H39QZFDEUPGVDIJY'
    
    function removeSpace(str: string) {
        return (str.toLowerCase().replace(" ", ""))
    }

    function boughtfun(datalist: any) {
        let boughtValue = 0;
        for (let i = 0; i < datalist.length; i++) {
            if (removeSpace(datalist[i]['contractAddress']) === removeSpace(coinAddress)) {
                if (removeSpace(datalist[i]['to']) === removeSpace(walletAddress)) {
                    boughtValue += Number(datalist[i]['value'])
                }
            }
        }
        return boughtValue;
    }

    function soldfun(datalist: any) {
        var soldValue = 0;
        for (let i = 0; i < datalist.length; i++) {
            if (removeSpace(datalist[i]['contractAddress']) === removeSpace(coinAddress)) {
                if (removeSpace(datalist[i]['from']) === removeSpace(walletAddress)) {
                    soldValue += Number(datalist[i]['value'])
                }
            }
        }
        return soldValue
    }

    const fetchReflection = async () => {
        // const url = https://api.bscscan.com/api?module=account&action=tokentx&address=0xD44027448A3961a2fCc642B63Ad3D745611D68F1&startblock=0&endblock=99999999&sort=asc&apikey=JZ4J2AWVAU7UIIHXB5H39QZFDEUPGVDIJY
        const url = 'https://api.bscscan.com/api?module=account&action=tokentx&address=' + walletAddress + '&startblock=0&endblock=99999999&sort=asc&apikey=' + apiToken
        try {
            const response: any = await axios.get(url);
            const data = response.data;
            let msg = "No Data"
            let buyval = 0;
            let soldval = 0;
            let balval = 0;
            let curval = 0;
            let curPrice = 0;
            let balToken = 0;
            if (data.result.length > 0) {
                let datalist = data.result
                buyval = boughtfun(datalist) / 1000000000
                soldval = soldfun(datalist) / 1000000000
                balval = buyval - soldval;
                console.log(buyval)
                console.log(soldval)
                console.log(balval)
            }
            else {
                msg = "No Data"
            }
            //const nurl='https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3&address=0x910466a829ca5717EEe66015280c8713a2f8acef&tag=latest&apikey=BSGW5KIFXF6N7GVIZQHIWRFR8IQ8EBMTAH&tokenPriceUSD=tokenPriceUSD'
            const nurl = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + coinAddress + '&address=' + walletAddress + '&tag=latest&apikey=' + apiToken + '&tokenPriceUSD=tokenPriceUSD'
            try {
                const response: any = await axios.get(nurl);
                const datacurrent = response.data;
                curval = Number(datacurrent['result']) / 1000000000
                console.log(curval)
                // const purl = https://bsc.api.0x.org/swap/v1/price?sellToken=0x59eB96F0B6f5838021f0E8f412Afe65D1Bf44A02&buyToken=BUSD&sellAmount=1000000000000000000
                const purl = 'https://bsc.api.0x.org/swap/v1/price?sellToken=' + coinAddress + '&buyToken=BUSD&sellAmount=1000000000000000000'
                try {
                    const response: any = await axios.get(purl);
                    const dataCurrentPrice = response.data
                    curPrice = Number(dataCurrentPrice['price'])
                    balToken = curval - balval;
                    console.log("baltoken:" + balToken)
                    if (balToken < 0) {
                        balToken = balToken * -1;
                        console.log("Probably you have sold all your reflections")
                    }

                    if (soldval === 0 && buyval === 0) {
                        soldval = 0
                    }
                    else if (soldval === 0 && buyval > 0) {
                        console.log("Sold None ")
                    }
                    const totalBalValue = balToken * curPrice
                    console.log("USD:" + totalBalValue.toFixed(2))
                    return { curPrice, balToken };

                } catch (error) {
                    console.error(error);
                }

            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return { fetchReflection };
};

export default useReflection;