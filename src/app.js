function DisplayErrorMessage() {
  if (error) {
  } else {
    alert("Valid email required");
  }
}

const error = document.querySelector(".btn-subscribe");
error.addEventListener("click", DisplayErrorMessage);

/*Thanks for subscribing! A confirmation email has been sent to
      ash@loremcompany.com. Please open it and click the button inside to
      confirm your subscription. Dismiss message*/
