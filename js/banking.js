
function getInputValue(inputId) {
    const Input = document.getElementById(inputId);
    const InputAmountText = Input.value;
    const amountValue = parseFloat(InputAmountText);
    // clearing input 
    Input.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    const newTotal = previousTotal + amount;
    totalElement.innerText = newTotal;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isadd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    // condition applying 
    if (isadd == true) {
        const newBalanceTotal = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalanceTotal;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {


    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);

    }




    /* accessing input 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value; 
    const depositAmount = parseFloat(depositAmountText);
    */


    // // showing total amount 
    // // const depositTotal = document.getElementById('deposit-total');
    // // const depositTotalText = depositTotal.innerText;
    // // const previousDepositTotal = parseFloat(depositTotalText);
    // // const newDepositTotal = previousDepositTotal + depositAmount;

    // depositTotal.innerText = newDepositTotal;

    // update balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
 */



})

// Handle withdraw event 

document.getElementById('withdraw-button').addEventListener('click', function () {


    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log("you dont have sufficent balance to withdraw the money. ");
    }



    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    // withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withDrawTotalText = withdrawTotal.innerText;
    // const previouswithdrawAmount = parseFloat(withDrawTotalText);

    // const newWithDrawTotal = previouswithdrawAmount + withdrawAmount;
    // withdrawTotal.innerText = newWithDrawTotal;



    // update withdraw balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */


})