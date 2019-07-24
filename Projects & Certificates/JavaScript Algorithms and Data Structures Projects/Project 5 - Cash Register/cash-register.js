const currencyValues = [
	["PENNY", 0.01],
	["NICKEL", 0.05],
	["DIME", 0.10],
	["QUARTER", 0.25],
	["ONE", 1.00],
	["FIVE", 5.00],
	["TEN", 10.00],
	["TWENTY", 20.00],
	["ONE HUNDRED", 100.00]
];

const indexOfCurrency = {
  "PENNY": 0,
  "NICKEL": 1,
  "DIME": 2,
  "QUARTER": 3,
  "ONE": 4,
  "FIVE": 5,
  "TEN": 6,
  "TWENTY": 7,
  "ONE HUNDRED": 8
}

function checkCashRegister(price, cash, cid) {
  const changeRequired = cash - price;

  //cash-in-drawer is less than the change due
  let totalCashInDrawer = 0;
  cid.forEach((value) => totalCashInDrawer += Number(value[1])); 
  if (totalCashInDrawer < changeRequired){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  //


  // console.log("Cleaned CID: " + cleanedCIDArray);

  let changeStillRequired = changeRequired.toFixed(2);
  // console.log("changeStillRequired: " + changeStillRequired);
  let changeBeingReturned = [];

  for (let i = 8; i >= 0; i--){
    if ((changeStillRequired / currencyValues[i][1]) > 1){
      let currencyHowMany = (changeStillRequired / currencyValues[i][1]);
      let currencyName = currencyValues[i][0];
      let currencyValue = currencyValues[indexOfCurrency[currencyName]][1];
      let cidAvailable = cid[indexOfCurrency[currencyName]][1];
      let cidAmount = cidAvailable / currencyValue;

      // console.log("Currency Type: " + currencyValues[i][0]); 
      // console.log("Amount: " + currencyHowMany);
      // console.log("CID Available: " + cidAvailable);
      // console.log("Value: " + currencyValue);
      // console.log("CID Amount: " + cidAmount);
      
      let reductionAmount = 0;

      if (cidAmount < currencyHowMany){
        reductionAmount += cidAmount * currencyValue;
      } else if (cidAmount >= currencyHowMany){
        reductionAmount += currencyValue * (Math.floor(currencyHowMany));
      }

      // console.log("Reduction Amount: " + reductionAmount);

      changeBeingReturned.push([currencyValues[i][0], reductionAmount]);
      
      changeStillRequired -= reductionAmount;
      changeStillRequired = changeStillRequired.toFixed(2);
 
      // changeStillRequired -= ((cidAvailable / currencyValue) * currencyValue);
      // console.log("changeStillRequired: " + changeStillRequired);
    }
  }
  // console.log(changeBeingReturned);

  let totalCashRemoved = 0;
  changeBeingReturned.forEach((value) => totalCashRemoved += Number(value[1]));

  //Cleaning CID to only values with money
  let cleanedCIDArray = [];
  changeBeingReturned.forEach(removeEmpty);
  function removeEmpty(value) {
    // console.log(value);
    if (value[1] > 0){
      cleanedCIDArray.push(value);
    }
  }
  // console.log(cleanedCIDArray.length)

  for (let i = (cleanedCIDArray.length); i < cid.length; i++){
    cleanedCIDArray.push([currencyValues[i][0],0]);
  }
  // console.log(totalCashInDrawer);
  // console.log(totalCashRemoved);
  // console.log(cleanedCIDArray);

    if (changeStillRequired > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalCashInDrawer - totalCashRemoved == 0){
      return {status: "CLOSED", change: [...cleanedCIDArray]};
    } else {
      return {status: "OPEN", change: [...changeBeingReturned]};
    }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])