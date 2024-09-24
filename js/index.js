const historyContainer = document.getElementById("history-container");
const cardContainer = document.getElementById("card-container");
const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");
const donationHistory = document.getElementById("donation-history");

const getFieldValuebyID = function (id) {
  const inputButton = parseFloat(document.getElementById(id).value);
  return inputButton;
};
const gettextField = function (id) {
  let textField = parseFloat(document.getElementById(id).innerText);
  return textField;
};

document.getElementById("donate-btn").addEventListener("click", function () {
  // getFieldValuebyID("noakhali-donation", "total-donation");

  // const noakhaliDonation = parseFloat(document.getElementById('noakhali-donation').value)
  const noakhaliDonation = getFieldValuebyID("noakhali-donation");

  const donatedAmount = gettextField("total-donation");
  let accountBalance = parseFloat(
    document.getElementById("account-balance").innerText
  );
  if (noakhaliDonation > accountBalance) {
    return alert("Unsufficient balance");
  } else if (noakhaliDonation <= 0) {
    return alert("Invalid amount number");
  } else if (isNaN(noakhaliDonation)) {
    return alert("Write valid number");
  } else {
    document.getElementById("total-donation").innerText =
      noakhaliDonation + donatedAmount;
    let totalAccountBal = accountBalance - noakhaliDonation;
    document.getElementById("account-balance").innerText = totalAccountBal;

    //  return alert("Thanks For Donating", donationInput);
  }

  const historyCard = document.createElement("div");
  historyCard.className =
    "rounded-lg border border-[#111111] border-opacity-10 px-4 py-5";
  historyCard.innerHTML = `
  <h1 class="text-2xl font-bold tracking-wider">${noakhaliDonation.toFixed(
    2
  )} taka has been donated for flood at Noakhali,Bangladesh</h1>
  <p class="text-lg mt-2 text-[#1111111] text-opacity-70">Date: ${new Date().toLocaleDateString()}(Bangladesh Standard Time)</p>
  
  
  `;
  historyContainer.insertBefore(historyCard, historyContainer.firstChild);
});

document.getElementById("donate-btn-2").addEventListener("click", function () {
  // getFieldValuebyID("feni-donation", "total-donation-2");

  const feniDonation = getFieldValuebyID("feni-donation");

  const donatedAmount = gettextField("total-donation-2");
  let accountBalance = parseFloat(
    document.getElementById("account-balance").innerText
  );
  if (feniDonation > accountBalance) {
    return alert("Unsufficient balance");
  } else if (feniDonation <= 0) {
    return alert("Invalid amount number");
  } else if (isNaN(feniDonation)) {
    return alert("Write valid number");
  } else {
    document.getElementById("total-donation-2").innerText =
      feniDonation + donatedAmount;
    let totalAccountBal = accountBalance - feniDonation;
    document.getElementById("account-balance").innerText = totalAccountBal;

    //  return alert("Thanks For Donating", donationInput);
  }

  const historyCard = document.createElement("div");
  historyCard.className =
    "rounded-lg border border-[#111111] border-opacity-10 px-4 py-5";
  historyCard.innerHTML = `
  <h1 class="text-2xl font-bold tracking-wider">${feniDonation.toFixed(
    2
  )} taka has been donated for flood at Feni,Bangladesh</h1>
  <p class="text-lg mt-2 text-[#1111111] text-opacity-70">Date: ${new Date().toLocaleDateString()}(Bangladesh Standard Time)</p>
  
  
  `;
  historyContainer.insertBefore(historyCard, historyContainer.firstChild);
});

document.getElementById("donate-btn-3").addEventListener("click", function () {
  const quotaDonation = getFieldValuebyID("quota-donation");
  const donatedAmount = gettextField("total-donation-3");
  let accountBalance = parseFloat(
    document.getElementById("account-balance").innerText
  );
  if (quotaDonation > accountBalance) {
    return alert("Unsufficient balance");
  } else if (quotaDonation <= 0) {
    return alert("Invalid amount number");
  } else if (isNaN(quotaDonation)) {
    return alert("Write valid number");
  } else {
    document.getElementById("total-donation-3").innerText =
      quotaDonation + donatedAmount;
    let totalAccountBal = accountBalance - quotaDonation;
    document.getElementById("account-balance").innerText = totalAccountBal;

    //  return alert("Thanks For Donating", donationInput);
  }

  const historyCard = document.createElement("div");
  historyCard.className =
    "rounded-lg border border-[#111111] border-opacity-10 px-4 py-5";
  historyCard.innerHTML = `
  <h1 class="text-2xl font-bold tracking-wider">${quotaDonation.toFixed(
    2
  )} taka has been donated for Quota Donation in Bangladesh</h1>
  <p class="text-lg mt-2 text-[#1111111] text-opacity-70">Date: ${new Date().toLocaleDateString()}(Bangladesh Standard Time)</p>
  
  
  `;
  historyContainer.insertBefore(historyCard, historyContainer.firstChild);
});

//history button functionality
historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-[#B4F461]", "border");
  donationButton.classList.remove("bg-[#B4F461]", "border");
  cardContainer.classList.add("hidden");

  historyContainer.classList.remove("hidden");
});

//donation button functionality
donationButton.addEventListener("click", function () {
  cardContainer.classList.remove("hidden");
  historyContainer.classList.add("hidden");
  donationButton.classList.add("bg-[#B4F461]", "border");
  historyButton.classList.remove("bg-[#B4F461]", "border");
});
