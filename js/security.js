// JavaScript Document
function TheLogin() {

var password = 'elysium';

if (this.document.login.pass.value == password) {
  top.location.href="home.htm";
}
else {
  location.href="incorrect.htm";
  }
}