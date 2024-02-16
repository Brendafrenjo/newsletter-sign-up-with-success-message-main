function handleSubscription(e) {
  e.preventDefault();
  const emailAddress = document.getElementById("email").value.trim();
  console.log();
  if (emailAddress.length > 0) {
    //if successful subscription then confirmation
    alert("Successful subscription");
  } else {
    //error
    alert("Subscription failed");
  }
}

const subscription = document.querySelector(".submit-form");
subscription.addEventListener("click", handleSubscription);
