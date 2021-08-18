function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(`${product}_number`);
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseFloat(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber
        // updare productTotal total

    const productTotal = document.getElementById(`${product}_total`).innerText = productNumber * price;

    //calculate total
    calculateTotal()

}

// total update

function getInputValue(product) {

    const productInput = document.getElementById(`${product}_number`);
    const productNumber = parseFloat(productInput.value);
    return productNumber
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10

    const totalPrice = subTotal + tax

    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

//handle phone increase decrease events

document.getElementById('phone_plus').addEventListener('click', () => {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone_minus').addEventListener('click', () => {
    updateProductNumber('phone', 1219, false)
})


//handle case increase decrease events
document.getElementById('case_plus').addEventListener('click', () => {
    // const caseInput = document.getElementById('case_number');
    // const caseNumber = caseInput.value;

    // caseInput.value = parseFloat(caseNumber) + 1;
    updateProductNumber('case', 59, true)

})

document.getElementById('case_minus').addEventListener('click', () => {

    // const caseInput = document.getElementById('case_number');
    // const caseNumber = caseInput.value;

    // caseInput.value = parseFloat(caseNumber) - 1;

    updateProductNumber('case', 59, false)


})