function handleSubscription(e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const emailAddress = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailAddress.length > 0 && emailPattern.test(emailAddress)) {
    //if successful subscription then confirmation
    alert("Successful subscription");
    const confirmation = document.getElementById("confirmation-container");
    confirmation.style.display = "block";
    emailInput.classList.remove("invalid-email");
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "none";
  } else {
    //error
    alert("Subscription failed");
    emailInput.classList.add("invalid-email");
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "inline-block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const subscription = document.querySelector(".submit-form");
  subscription.addEventListener("click", handleSubscription);
});
