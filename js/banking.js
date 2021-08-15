
function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value; 
    const depositAmount = parseFloat(depositAmountText);
    // clearing input 
    depositInput.value = '';
    return depositAmount;
}









document.getElementById('deposit-button').addEventListener('click', function () {
    // accessing input 
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value; 
    // const depositAmount = parseFloat(depositAmountText);



    const depositAmount = getInputValue();

    // showing total amount 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    const newDepositTotal = previousDepositTotal + depositAmount;

    depositTotal.innerText = newDepositTotal;
    
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + depositAmount; 
    balanceTotal.innerText = newBalanceTotal;

})

// Handle withdraw event 

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw clicked ');

    //accessing withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    // getting withdraw amount 
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withDrawTotalText = withdrawTotal.innerText;
    const previouswithdrawAmount = parseFloat(withDrawTotalText);

    const newWithDrawTotal = previouswithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = newWithDrawTotal;
    // clearing input 
    withdrawInput.value = '';


    // update withdraw balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - withdrawAmount; 
    balanceTotal.innerText = newBalanceTotal;
})