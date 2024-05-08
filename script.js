function validateForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  const errorMessages = [];

  if (fullName.length < 5) {
    errorMessages.push("Name must be at least 5 characters long.");
  }

  if (!email.includes('@')) {
    errorMessages.push("Invalid email format.");
  }

  if (phone.length !== 10 || phone === '123456789') {
    errorMessages.push("Invalid phone number.");
  }

  if (password.length < 8 || password === 'password' || password === fullName) {
    errorMessages.push("Password must be at least 8 characters long and cannot be 'password' or your name.");
  }

  if (password !== confirmPassword) {
    errorMessages.push("Passwords do not match.");
  }

  const errorDiv = document.getElementById('errorMessages');
  errorDiv.innerHTML = '';

  if (errorMessages.length > 0) {
    errorMessages.forEach(message => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = message;
      errorDiv.appendChild(errorMessage);
    });
    return false;
  }

  return true;
}
function showAlert(message,type)
{
const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert');
  if (type === 'success') {
    alertDiv.classList.add('alert-success');
  } else if (type === 'error') {
    alertDiv.classList.add('alert-error');
  }
  alertDiv.textContent = message;
  document.getElementById('errorMessages').appendChild(alertDiv);
}
