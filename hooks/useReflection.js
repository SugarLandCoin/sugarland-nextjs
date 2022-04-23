const useReflection = () => {
    
const request = require('request') 
// let walletAddress='0x36a066f7fa0871c17ad499bf6dfcfb965b93f46e'
let walletAddress='0x35F223EaC611d0C4199dF98d8d3d0af338426aB7'
let coinAddress='0x59eB96F0B6f5838021f0E8f412Afe65D1Bf44A02' //sugarland
const apiToken= 'JZ4J2AWVAU7UIIHXB5H39QZFDEUPGVDIJY'

// let coinAddress='0xc17c30e98541188614df99239cabd40280810ca3' everrise
 
function removeSpace(str){
    return(str.toLowerCase().replaceAll(" ",""))
}
 
function boughtfun(datalist){
    let boughtValue=0;
    for (let i = 0; i < datalist.length; i++) {
        if (removeSpace(datalist[i]['contractAddress'])===removeSpace(coinAddress)){
           if (removeSpace(datalist[i]['to'])===removeSpace(walletAddress)) {
                boughtValue+=Number(datalist[i]['value'])
            }
        }
    }   
   return boughtValue;
}
 
function soldfun(datalist){
   var soldValue=0;
   for (let i = 0; i < datalist.length; i++) {
    if (removeSpace(datalist[i]['contractAddress'])===removeSpace(coinAddress)){
       if (removeSpace(datalist[i]['from'])===removeSpace(walletAddress)) {
            soldValue+=Number(datalist[i]['value'])
            }
         }
    }
    return soldValue
}
 
const url = 'https://api.bscscan.com/api?module=account&action=tokentx&address='+walletAddress+'&startblock=0&endblock=99999999&sort=asc&apikey='+apiToken 

request({url:url},(error , response)=>{
const data =JSON.parse(response.body)
let msg ="No Data"
let buyval = 0;
let soldval=0;
let balval=0;
let curval=0;
let curPrice=0;
let balToken=0;
 
if(data.result.length>0) {
    let datalist=data.result
    buyval = boughtfun(datalist)/1000000000 
    soldval=soldfun(datalist)/1000000000 
    balval=buyval-soldval;
    console.log(buyval)
    console.log(soldval)
    console.log(balval)
   }
 else {
    msg="No Data"
}
 
//const nurl='https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3&address=0x910466a829ca5717EEe66015280c8713a2f8acef&tag=latest&apikey=BSGW5KIFXF6N7GVIZQHIWRFR8IQ8EBMTAH&tokenPriceUSD=tokenPriceUSD'
const nurl = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress='+coinAddress+'&address='+walletAddress+'&tag=latest&apikey='+apiToken+'&tokenPriceUSD=tokenPriceUSD'
request({url:nurl},(error,response)=>{
    const datacurrent =JSON.parse(response.body)
    curval =Number(datacurrent['result'])/1000000000 
    console.log(curval)
 
    const purl = 'https://bsc.api.0x.org/swap/v1/price?sellToken='+coinAddress+'&buyToken=BUSD&sellAmount=1000000000000000000'
    request({url:purl},(error,response)=>{
        const dataCurrentPrice =JSON.parse(response.body)
        curPrice =Number(dataCurrentPrice['price'])
        console.log(curPrice.toFixed(18)) 
        balToken=curval-balval;
        console.log(balToken)
        if (balToken < 0){
            balToken=balToken*-1;
            console.log("Probably you have sold all your reflections")
        }
    
        if (soldval === 0 && buyval === 0){
            soldval=0
        }
        else if (soldval === 0 && buyval >0){
            console.log("Sold None ")
        }
        totalBalValue = balToken * curPrice
        console.log("USD:" + totalBalValue.toFixed(2))

        })

    })
    return {
        curval,
        totalBalValue
    };
})
};

export default useReflection;