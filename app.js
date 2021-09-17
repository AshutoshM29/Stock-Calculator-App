var initialPrice =  document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var tellButton = document.querySelector("#tell-btn");
var outputDiv = document.querySelector("#output");


tellButton.addEventListener("click", clickHandler);

function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    if(ip&&qty&&curr) {
        calculateProfitAndLoss(ip,qty,curr);
    } else {
        showOutput(`Please enter all the fields 😠`);
    }
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = ((loss / initial) * 100).toFixed(2);

        showOutput(`Oh no!! you have lost ${lossPercentage}% and your total loss is ${loss} 📉`);
        outputDiv.style.color = "red";


    }
 else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = ((profit / initial) * 100).toFixed(2);

    showOutput(`WOW!! you have gained ${profitPercentage}% and your total profit is ${profit} 📈`);
    outputDiv.style.color = "#88C133";
    }

    else {
        showOutput(`No profit, No Loss ⚖️`);
        outputDiv.style.color = "white";
    }
}
    function showOutput(message) {
        outputDiv.innerHTML = message;
      };
