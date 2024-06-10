document.addEventListener('DOMContentLoaded', function () {
  // Debugging statement to ensure the script is running
  console.log('JavaScript is loaded and running.');


  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting

    // Retrieve the input values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let rememberMe = document.getElementById('rememberMe').checked;

    // Display the values in plain text
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // Alternatively, you could display the values in an alert
    alert(`Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
  });

  let eyeicon = document.getElementById("eyeicon");
  let password = document.getElementById("password");

  eyeicon.onclick = function () {
    if (password.type === "password") {
      password.type = "text";
      eyeicon.classList.remove("bxs-lock-alt");
      eyeicon.classList.add("bxs-lock-open");
    } else {
      password.type = "password";
      eyeicon.classList.remove("bxs-lock-open");
      eyeicon.classList.add("bxs-lock-alt");
    }
  };

})
