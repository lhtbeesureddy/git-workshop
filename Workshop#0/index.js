let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculateTotalAmount() {
    let billAmount = billAmountElement.value;
    let percentageTip = percentageTipElement.value;
    if (billAmount === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input.";
    } else if (percentageTip === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input.";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountElement.value);
        let percentageTip = parseInt(percentageTipElement.value);
        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;
        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = calculatedTotal;

    }
}