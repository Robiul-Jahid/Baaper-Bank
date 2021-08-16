  // function doubleIt(num){
  //   const result = num * 2;
  //   return result;
  // }
  // const first = doubleIt(6);
  // const second = doubleIt(12);



function getInputValue(){
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);

  // clear input field
  depositInput.value = '';

  return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function(){
  //Step One -- value ta dore rakhte hobe.
  // const depositInput = document.getElementById('deposit-input');
  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText);
const depositAmount = getInputValue();

  //Step Two -- Input er man re Deposit er modde nite hobe
  // Get current deposit
  const depositTotal = document.getElementById('deposit-total');

  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = previousDepositTotal + (depositAmount); 

  //Upadate Balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal + depositAmount;
});

//Handle Withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){
  const withdrawInput = document.getElementById('withdraw-input');
  const previousWithdrawAmountText = withdrawInput.value;
  const withdrawAmount = parseFloat(previousWithdrawAmountText);

  // Upadate withdraw Total
  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(withdrawTotalText);

  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

  //update balance after withdraw
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

  //clear withdraw input field
  withdrawInput.value = "";
});