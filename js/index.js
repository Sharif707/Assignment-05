// This is my reusable function
let getFieldValuebyID = function (InputID, donatedMoney) {
  const donationInput = parseFloat(document.getElementById(InputID).value);
  let donatedAmount = parseFloat(
    document.getElementById(donatedMoney).innerText
  );
  let accountBalance = parseFloat(
    document.getElementById("account-balance").innerText
  );
  if (donationInput > accountBalance) {
    return alert("Unsufficient balance");
  } else if (donationInput <= 0) {
    return alert("Invalid amount number");
  } else if (isNaN(donationInput)) {
    return alert("Write valid number");
  } else {
    document.getElementById(donatedMoney).innerText =
      donationInput + donatedAmount;
    let totalAccountBal = accountBalance - donationInput;
    document.getElementById("account-balance").innerText = totalAccountBal;
  }
};



document.getElementById("donate-btn").addEventListener("click", function () {
  getFieldValuebyID("noakhali-donation", "total-donation");
});
document.getElementById("donate-btn-2").addEventListener("click", function () {
  getFieldValuebyID("feni-donation", "total-donation-2");
});
document.getElementById("donate-btn-3").addEventListener("click", function () {
  getFieldValuebyID("quota-donation", "total-donation-3");
});
