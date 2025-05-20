
function studentQuery() {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();
  if (!name || !phone || !course) {
    alert("Please fill all required fields.");
    return;
  }

  document.getElementById("successMsg").style.display = "block";
  document.getElementById("enquiryForm").reset();
  setTimeout(() => {
    document.getElementById("successMsg").style.display = "none";
  }, 5000);
}
window.onload = () => {
  document.getElementById("successMsg").style.display = "none";
};

function menuOpen() {
  const nav = document.getElementById('main-nav');

  if (!nav.classList.contains('active')) {
    nav.classList.add('active');
    setTimeout(() => overlay.classList.add('active'), 10);

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
      nav.classList.remove('active');
      setTimeout(() => overlay.remove(), 300);
    });
  } else {
    nav.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
}
function AdminLogIn() {
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value.trim();
  const password = document.querySelector('input[type="password"]').value;

  const adminEmail = "admin@gmail.com";
  const adminPassword = "admin123";

  if (email === adminEmail && password === adminPassword) {
    alert("Login successful!");

  } else {
    alert("Invalid User ID or Password.");
  }
}
function logIn() {
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value.trim();
  const password = document.querySelector('input[type="password"]').value;

  const adminEmail = "samir@gmail.com";
  const adminPassword = "samir123";

  if (email === adminEmail && password === adminPassword) {
    alert("Login successful!");


    window.location.href = "dashboard.html";
    // Close the login modal after successful login


  } else {
    alert("Invalid User ID or Password.");
  }
}
function signUp() {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const termsAccepted = document.getElementById("terms").checked;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!termsAccepted) {
    alert("You must accept the Terms & Conditions.");
    return;
  }

  document.getElementById("registerSuccess").style.display = "block";

  // Reset the form
  document.getElementById("registerForm").reset();

  // Hide success message after few seconds
  setTimeout(() => {
    document.getElementById("registerSuccess").style.display = "none";
  }, 5000);
  // Redirect to thank you page
  window.location.href = "thank-you.html";

}
function studentQuery(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !phone || !course) {
    alert("Please fill in all required fields.");
    return;
  }

  alert(
    "Enquiry Submitted Successfully!\n\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Email: " + email + "\n" +
    "Course: " + course + "\n" +
    "Message: " + message
  );


  // Show success message
  document.getElementById("successMsg").style.display = "block";

  // Clear form
  document.getElementById("enquiryForm").reset();
  //thank you page redirect



  // Optionally hide message after a few seconds
  setTimeout(() => {
    document.getElementById("successMsg").style.display = "none";
  }, 5000);
  setTimeout(() => {
    window.location.href = "thank-you.html"; // Redirect to thank you page
  }, 5000);

}

// Attach the event listener after page loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("enquiryForm").addEventListener("submit", studentQuery);
  document.getElementById("successMsg").style.display = "none"; // Hide initially
});
function paynow(event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target.closest("form");
  const regNumber = form.querySelector("input[type='text']").value.trim();
  const paymentMode = form.querySelector("select").value;
  const amount = form.querySelector("input[type='number']").value.trim();

  if (!regNumber || !paymentMode || !amount || amount <= 0) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Simulate a payment process (replace with actual payment gateway logic)
  alert(
    "Payment Details:\n" +
    "Registration No: " + regNumber + "\n" +
    "Payment Mode: " + paymentMode + "\n" +
    "Amount: ₹" + amount
  );


  alert("Payment successful! Thank you.");
  form.reset();
  setTimeout(() => {
    window.location.href = "thank-you.html"; // Redirect to thank you page
  }, 2000);
}

// Add listener after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".payment-container form");
  form.addEventListener("submit", paynow);
});
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var email = document.getElementById('newsletter-email').value.trim();
  var messageDiv = document.getElementById('newsletter-message');

  // Simple email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    messageDiv.style.color = "red";
    messageDiv.textContent = "Please enter your email address.";
    return;
  }
  if (!emailPattern.test(email)) {
    messageDiv.style.color = "red";
    messageDiv.textContent = "Please enter a valid email address.";
    return;
  }
  messageDiv.style.color = "green";
  messageDiv.textContent = "Thank you for subscribing!";
  alert('Newsletter subscription successful!');
  window.location.href = "index.html";
  document.getElementById('newsletter-form').reset();


});