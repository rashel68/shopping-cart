function btnFunction(productId, perPrice, isIncrease) {
    const productInput = document.getElementById(productId + '-input');
    const productInputValue = parseInt(productInput.value);
    let quantity = productInputValue;
    if (isIncrease == true) {
        quantity = productInputValue + 1;
    }
    else if (quantity > 0) {
        quantity = productInputValue - 1;
    }
    productInput.value = quantity;

    const productPrice = document.getElementById(productId + '-price');
    const displayTotlaPrice = quantity * perPrice;
    productPrice.innerText = displayTotlaPrice;

    calculteTotal();

}

function calculteInput(inputId) {
    const productNumber = document.getElementById(inputId + '-input');
    const productNumValue = parseInt(productNumber.value);
    return productNumValue;
}
function calculteTotal() {
    const phonePrice = calculteInput('phone') * 1219;
    const casePrice = calculteInput('case') * 59;
    const subTotal = phonePrice + casePrice;
    const tax = subTotal / 10;
    const totalCost = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalCost;
}



// phone events handaler 
document.getElementById('phone-increaseBtn').addEventListener('click', function () {
    btnFunction('phone', 1219, true);
});
document.getElementById('phone-decreaseBtn').addEventListener('click', function () {
    btnFunction('phone', 1219, false);
});


// casing events handler 
document.getElementById('increaseBtn').addEventListener('click', function () {
    btnFunction('case', 59, true);
});

document.getElementById('decreaseBtn').addEventListener('click', function () {
    btnFunction('case', 59, false);
})