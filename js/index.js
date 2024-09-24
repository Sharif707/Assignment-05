const historyContainer = document.getElementById('history-container')
const cardContainer = document.getElementById("card-container")

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
    alert("Thanks For Donating", donationInput);
  }
};

document.getElementById("donate-btn").addEventListener("click", function () {
  getFieldValuebyID("noakhali-donation", "total-donation");
  
const noakhaliDonation = parseFloat(document.getElementById('noakhali-donation').value)
const feniDonation = parseFloat(document.getElementById("feni-donation").value)
const quotaDonation = parseFloat(document.getElementById("quota-donation").value)


const historyCard = document.createElement("div");
  historyCard.className = "rounded-lg border border-[#111111] border-opacity-10 px-4 py-5";
  historyCard.innerHTML = 
  `
  <h1 class="text-2xl font-bold tracking-wider">${noakhaliDonation.toFixed(2)} taka has been donated for flood at Noakhali,Bangladesh</h1>
  <p class="text-lg mt-2 text-[#1111111] text-opacity-70">Date: ${new Date().toLocaleDateString()}(Bangladesh Standard Time)</p>
  
  
  `;
  historyContainer.insertBefore(historyCard, historyContainer.firstChild)
});




document.getElementById("donate-btn-2").addEventListener("click", function () {
  getFieldValuebyID("feni-donation", "total-donation-2");
});
document.getElementById("donate-btn-3").addEventListener("click", function () {
  getFieldValuebyID("quota-donation", "total-donation-3");
});




const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");
const donationHistory = document.getElementById("donation-history");

historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-[#B4F461]", "border");
  donationButton.classList.remove("bg-[#B4F461]", "border");
cardContainer.classList.add('hidden')

  historyContainer.classList.remove('hidden')

 
});

donationButton.addEventListener("click", function () {
  donationButton.classList.add("bg-[#B4F461]", "border");
  historyButton.classList.remove("bg-[#B4F461]", "border");
});
