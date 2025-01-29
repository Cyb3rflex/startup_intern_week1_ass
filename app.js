document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = form
      .querySelector("input[placeholder='Name']")
      .value.trim();
    const lastName = form
      .querySelector("input[placeholder='Last Name']")
      .value.trim();
    const email = form
      .querySelector("input[placeholder='Email or phone number']")
      .value.trim();
    const dob = form
      .querySelector("input[placeholder='Date of birth (MM/DD/YY)']")
      .value.trim();
    const password = form
      .querySelector("input[placeholder='Password']")
      .value.trim();
    const confirmPassword = form
      .querySelector("input[placeholder='Confirm password']")
      .value.trim();
    const termsChecked = form.querySelector("#terms").checked;

    let isValid = true;
    let errorMessage = "";

    // Name validation
    if (firstName === "" || lastName === "") {
      errorMessage += "First and Last Name are required.\n";
      isValid = false;
    }

    // Email validation
    if (!validateEmail(email)) {
      errorMessage += "Enter a valid email address.\n";
      isValid = false;
    }

    // Date of birth validation (MM/DD/YY format)
    if (!validateDate(dob)) {
      errorMessage += "Enter a valid date in MM/DD/YY format.\n";
      isValid = false;
    }

    // Password validation
    if (password.length < 6) {
      errorMessage += "Password must be at least 6 characters long.\n";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errorMessage += "Passwords do not match.\n";
      isValid = false;
    }

    // Terms checkbox validation
    if (!termsChecked) {
      errorMessage += "You must agree to the Terms and Privacy policy.\n";
      isValid = false;
    }

    // Show errors or submit form
    if (!isValid) {
      alert(errorMessage);
    } else {
      alert("Form submitted successfully!");
      form.submit();
    }
  });

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Date validation function (MM/DD/YY format)
  function validateDate(date) {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/;
    return dateRegex.test(date);
  }
});
