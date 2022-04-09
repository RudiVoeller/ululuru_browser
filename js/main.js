
function processLogin(){
  console.log("In Login");
  var username = document.getElementById("usernameInput").value
  var passwordHash = document.getElementById("passwordInput").value.hashCode();

  if(username === "pogchamp" && passwordHash === "pogchamp".hashCode())
  {
    console.log("Login succesfull");
  } else {
    console.log("Bad login");
    window.alert("Credentials false");
  }

}

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

