window.onload=function() {
   if(window.ethereum !== "undefined") {
      this.ethereum.on("accountsChanged", handleAccountsChanged)
   }
}

let accounts;

const handleAccountsChanged=(a)=> {
   console.log("accounts changed")
   accounts=a
}

async function connectWalllet() {
   accounts=await window.ethereum.request({method: "eth_requestAccounts"}).catch((err)=>{
      console.log(err)
   })
   console.log(accounts)
}

async function checkBalance() {
   let balance=await window.ethereum.request({method: "eth_getBalance",
      params: [
      accounts[0],
      'latest'
      ]
   }).catch((err)=>{
      console.log(err)
   })

   console.log(parseInt(blancee) /Math.pow(10,18))
}

async function sendTransaction() {

   params: [{
      "from": "0xCe43A6bFbdddd4f2B7E3F45a4BF641ed7538b07d",
      "to": "0x88Aaaae76a777918f15206b31fa4e3c7fDedAcFf",
      "gas": Number(21000).toString(16), // 30400
      "gasPrice": Number(2500000).toString(16), // 10000000000000
      "value": Number(1000000000000000000).toString(16), // 2441406250
      "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
    }]

   let result=await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)=>{
      console.log(err)
   })
}