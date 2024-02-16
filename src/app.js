function handleSubscription(e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const emailAddress = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailAddress.length > 0 && emailPattern.test(emailAddress)) {
    //if successful subscription then confirmation
    alert("Successful subscription");
    document.getElementById("confirmation-container").style.display =
      "block";
  } else {
    //error
    alert("Subscription failed");
  }
}

const subscription = document.querySelector(".submit-form");
subscription.addEventListener("click", handleSubscription);
