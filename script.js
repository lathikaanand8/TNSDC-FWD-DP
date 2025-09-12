// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById('formMessage').textContent = 
    "Thanks for reaching out! I'll get back to you soon 😊";

  this.reset();
});