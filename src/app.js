function handleSubscription(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const emailAddress = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.checkValidity()) {
    //if successful subscription then confirmation
    alert("Successful subscription");
    const confirmation = document.getElementById("confirmation-container");
    const subscribe = document.getElementById("subscribe-container");
    confirmation.style.display = "block";
    subscribe.style.display = "none";
    emailInput.classList.remove("invalid-email");
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "none";
  } else {
    //error
    alert("Subscription failed");
    emailInput.classList.add("invalid-email");
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const subscription = document.querySelector(".submit-form");
  subscription.addEventListener("submit", handleSubscription);
});
