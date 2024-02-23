function handleSubscription(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const emailAddress = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMessage = document.querySelector(".error-message");
  if (emailAddress.length > 0 && emailPattern.test(emailAddress)) {
    //if successful subscription then confirmation
    const confirmation = document.getElementById("confirmation-container");
    const subscribe = document.getElementById("subscribe-container");
    const emailValue = document.querySelector(".email-value");
    confirmation.style.display = "block";
    subscribe.style.display = "none";
    emailInput.classList.remove("invalid-email");
    errorMessage.style.display = "none";
    emailInput.style.borderColor = "black";
    emailInput.style.placeholderColor = "black";
    emailValue.innerHTML = emailAddress;
  } else {
    //error
    emailInput.classList.add("invalid-email");
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "#ff0000";
    emailInput.style.placeholderColor = "#ff0000";
  }
}

function handleDismiss() {
  const confirmation = document.getElementById("confirmation-container");
  const subscribe = document.getElementById("subscribe-container");
  confirmation.style.display = "none";
  subscribe.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const subscription = document.querySelector(".submit-form");
  subscription.addEventListener("submit", handleSubscription);
});

const dismissBtn = document.querySelector(".dissmiss-button");
dismissBtn.addEventListener("click", handleDismiss);
