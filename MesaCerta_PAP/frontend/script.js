function showRecover() {
  document.querySelector('.login-box').classList.add('hidden');
  document.querySelector('.recover-box').classList.remove('hidden');
}

function showRegister() {
  document.querySelector('.login-box').classList.add('hidden');
  document.querySelector('.register-box').classList.remove('hidden');
}

function backToLogin() {
  document.querySelector('.login-box').classList.remove('hidden');
  document.querySelector('.recover-box').classList.add('hidden');
  document.querySelector('.register-box').classList.add('hidden');
}

function login() {
  // Simulação
  alert("Login bem-sucedido!");
  // Aqui redirecionarias para principal.html
  window.location.href = "principal.html";
}

function sendRecoveryLink() {
  const email = document.getElementById('recoverEmail').value;
  alert(`Enviado link de recuperação para: ${email}`);
}
