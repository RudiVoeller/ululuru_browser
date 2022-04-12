let x = document.cookie


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


function processLogin() {
  console.log("In Login");
  var usernameHash = document.getElementById("usernameInput").value.hashCode()
  var passwordHash = document.getElementById("passwordInput").value.hashCode();

  if (proofCredentials() === true) {
    setCookie(usernameHash, passwordHash, 30);
    console.log("Login succesfull");
    startPlottingUluluru()
  } else {
    console.log("Bad login");
    window.alert("Credentials false");
  }
}

String.prototype.hashCode = function () {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function switchToContact() {
  document.getElementById("contactTopNav").classList.toggle("active");
  document.getElementById("homeTopNav").classList.remove("active");
}

function switchToHome() {
  document.getElementById("contactTopNav").classList.remove("active");
  document.getElementById("homeTopNav").classList.toggle("active");
}

function setCookie(userHash, passHash, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = "uHash=" + userHash + ";pHash=" + passHash + ";" + expires + ";path=/";
}


function checkCookie() {

  var userHash = getCookie("uHash");
  var passHash = getCookie("pHash");

  if (userHash != '') {
    if (proofCredentials(userHash, passHash) === true)
      setLoggedIn();
  }

}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function proofCredentials(userHash, passHash) {
  //TODO: Proof credentials
  return true;
}

function setLoggedIn() {

  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "block";

}

function setLoggedOut() {

  document.getElementById("login").style.display = "block";
  document.getElementById("logout").style.display = "none";
  const d = new Date();
  d.setTime(d.getTime() - 1);
  document.cookie = "uHash=;pHash=;expires=" + d.toUTCString();
}
