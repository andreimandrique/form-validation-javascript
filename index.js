const submit = document.getElementById("submit");

function checkEmail() {
  const email = document.getElementById("email");
  const validateEmail = document.getElementById("validateEmail");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value.match(emailRegex)) {
    validateEmail.textContent = "Please enter a valid email address.";
  } else {
    validateEmail.textContent = "Valid email address";
    console.log("Valid Email");
  }
}

function checkZIP() {
  const ZIP = document.getElementById("ZIP");
  const country = document.getElementById("country").value;
  const validateZIP = document.getElementById("validateZIP");

  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  const countryRegex = constraints[country][0];

  if (!ZIP.value.match(countryRegex)) {
    validateZIP.textContent = "Invalid ZIP Code";
  } else {
    validateZIP.textContent = "Correct ZIP Code";
    ZIP.textContent = "";
    console.log("Valid Zip code");
  }
}

function checkPassword() {
  const password = document.getElementById("password");
  const cpassword = document.getElementById("cpassword");
  const validatePassword = document.getElementById("validatePassword");

  if (password.value === "" || cpassword.value === "") {
    validatePassword.textContent = "Please enter both password fields.";
    return;
  }

  if (password.value !== cpassword.value) {
    validatePassword.textContent = "Invalid Password";
  } else {
    validatePassword.textContent = "Password matched";
    console.log("Password matched");
  }
}

window.onload = () => {
  document.getElementById("email").oninput = checkEmail;
  document.getElementById("country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkPassword();
});
