
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
function logIn(){
    event.preventDefault(); 

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value;

    const adminEmail = "samir@gmail.com";
    const adminPassword = "samir123";

    if (email === adminEmail && password === adminPassword) {
      alert("Login successful!");
      
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

    // Check terms accepted
    if (!termsAccepted) {
      alert("You must accept the Terms & Conditions.");
      return;
    }

    // Optionally: You can store this in localStorage or Firebase here

    // Show success message
    document.getElementById("registerSuccess").style.display = "block";

    // Reset the form
    document.getElementById("registerForm").reset();

    // Hide success message after few seconds
    setTimeout(() => {
      document.getElementById("registerSuccess").style.display = "none";
    }, 5000);
  }