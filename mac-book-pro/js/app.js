
//------------------------- set product cost  --------------
function productCost(id, price) {
    document.getElementById(id).innerText = price;
    total();
}


//----------------------------    calculate and set total price   --------------------
function total() {
    
    const bestPrice = parseInt(document.getElementById('bestprice-balance').innerText);
    // const totalMoney = parseInt(bestPrice);

    const extraMemoryCost = parseInt(document.getElementById('memory-cost').innerText);
    // const extraMemoryCost = parseInt(extraMemoryCost);

    const extraStorage = parseInt(document.getElementById('storage-Cost').innerText);

    const deleveryCost = parseInt(document.getElementById('delivery-cost').innerText);

    const totalCost = bestPrice + extraMemoryCost + extraStorage + deleveryCost;

    document.getElementById('total-balance').innerText = totalCost;

    document.getElementById('net-price').innerText = totalCost;

}
 
// call id and input price for memory section
document.getElementById('8GB-memory-btn').addEventListener('click', function () {
    productCost('memory-cost', 0);
});
document.getElementById('16GB-memory-btn').addEventListener('click', function () {
    productCost('memory-cost', 180);
});

// call id and input price for ssd section
document.getElementById('256GB-ssd-btn').addEventListener('click', function () {
    productCost('storage-Cost', 0);
})
document.getElementById('512GB-ssd-btn').addEventListener('click', function () {
    productCost('storage-Cost', 100);

});
document.getElementById('1TB-ssd-btn').addEventListener('click', function () {
    productCost('storage-Cost', 180);
});

// call id and input price for delivery section
document.getElementById('free-delivery').addEventListener('click', function () {
    productCost('delivery-cost', 0);
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    productCost('delivery-cost', 20);
});


//-------------------------------- bonus part --------------------

document.getElementById('pomo-btn').addEventListener('click', function () {

    const promoText = document.getElementById('pomo-input').value;
    const totalPrice = document.getElementById('total-balance').innerText;
    let totalNetPrice = parseFloat(totalPrice);

    //promocode check condition
    if (promoText == 'stevekaku') {
        const promoPrice = parseFloat(totalPrice);
        const offer = promoPrice * 0.2;
        totalNetPrice = totalNetPrice - offer;

    }
    document.getElementById('net-price').innerText = totalNetPrice;
})