//SINGUP
var jRegistrado = document.getElementById("jRegistrado");
if (jRegistrado) {
  jRegistrado.addEventListener("click", function (e) {
    window.location.href = "./login.html";
  });
}

var navigationText = document.getElementById("navigationText");
if (navigationText) {
  navigationText.addEventListener("click", function (e) {
    window.location.href = "../index.html";
  });
}

var frameContainer = document.getElementById("frameContainer");
if (frameContainer) {
  frameContainer.addEventListener("click", function (e) {
    window.location.href = "../index.html";
  });
}
//LOGIN
var novoUsurioRegistreSe = document.getElementById(
    "novoUsurioRegistreSe",
  );
  if (novoUsurioRegistreSe) {
    novoUsurioRegistreSe.addEventListener("click", function (e) {
      window.location.href = "./SingUp.html";   
    });
  }

  var frameContainer = document.getElementById("frameContainer");
  if (frameContainer) {
    frameContainer.addEventListener("click", function (e) {
      window.location.href = "../index.html";
    });
  }

  //E-BET
  var formulaEText = document.getElementById("formulaEText");
  if (formulaEText) {
    formulaEText.addEventListener("click", function (e) {
      window.location.href = "../index.html";
    });
  }
//loja
  var frameContainer = document.getElementById("frameContainer");
  if (frameContainer) {
    frameContainer.addEventListener("click", function (e) {
      window.location.href = "../index.html";
    });
  }

//sobre
    var frameContainer = document.getElementById("frameContainer");
    if (frameContainer) {
      frameContainer.addEventListener("click", function (e) {
        window.location.href = "../index.html";
      });
    }


//---------------------------------------------//------------------------

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation
  if (username === 'admin@email.com' && password === '1234') {
      // Redirect to another page
      window.location.href = '../index.html';
      alert("Sucesso no Logon")
  } else {
      alert('Invalid username or password.');
  }
});