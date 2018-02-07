function ipInit() {
  var ip = document.getElementById("ip").innerHTML;
  var arr = ip.split(".");
  if (arr.length != 4) {
    alert("You have written a wrong address! Please try again");
    document.getElementById("ip").style.backgroundColor = "red";
    document.getElementById("ip").innerHTML = "";
  }
}

var OS = "";

function init(opSyst) {
  if (opSyst == 1) {
    OS = "powerPoint";
  } else {
    OS = "libreOffice";
  }
  module.exports = OS;
}
