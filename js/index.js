let handleTotalTrancsaction = function () {
  const donationInput = parseFloat(document.getElementById('donation-input').value);
  let donatedAmount = parseFloat(document.getElementById("donated-amount").innerText);
  let accountBalance = parseFloat(document.getElementById("account-balance").innerText);
  if(donationInput < 0 || donationInput > accountBalance){
    return alert('Invalid amount number')
  }
  else if(isNaN(donationInput)){
    return alert('Write valid number')
  }

   else {
    document.getElementById('donated-amount').innerText = donationInput + donatedAmount
    let totalAccountBal = accountBalance - donationInput
    document.getElementById('account-balance').innerText = totalAccountBal
 
  


  
 

    
   }

  
}

document.getElementById("donate-btn").addEventListener("click", handleTotalTrancsaction);
