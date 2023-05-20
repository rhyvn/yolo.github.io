function subscribe() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
  
    if (email.trim() === '') {
        alert("Please enter your email address.");
        return;
    }
  
    alert("Thank you for subscribing to Yolo Apparels. We will email you if there's a new arrival.");
    emailInput.value = ''; // Clear the input field after subscribing
}
