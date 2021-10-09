function checkCashRegister(price, cash, cid) {
  var cidPrim = [[100],[20],[10],[5],[1],[0.25],[0.1],[0.05],[0.01]]
  var change = cash - price; //return change
  //var changeGir = 
  var totalCash = 0
  
  for (let i=8; i>=0; i--){
     cidPrim[8-i].push(cid[i][1])
     totalCash += cid[i][1]
  } //return cidPrim

  if (totalCash < change) return {status: "INSUFFICIENT_FUNDS", change: []}
  if (totalCash == change) return {status: "CLOSED", change: cid}

  var cidMaped = cidPrim.map(function(arr){
    let c2c = arr[0]*Math.floor(change/arr[0]); 
    if( c2c <= arr[1]){
      change = change.toFixed(2) - c2c; 
      return c2c
    } else { change = change - arr[1]; return arr[1]}
  });  //return cidMaped
  for(let i = 0; i < cid.length; i++){
     cid[i][1] = cidMaped[8-i]; 
   } 
   if(change > 0 ) return {status: "INSUFFICIENT_FUNDS", change: []}
  return {status: "OPEN", change:cid.filter(elem => elem[1] > 0).reverse()}
}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.



  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  //{status: "OPEN", change: [["QUARTER", 0.5]]}.
  console.log('\t')
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
  console.log('\t')
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
  console.log('\t')
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  //{status: "INSUFFICIENT_FUNDS", change: []}.