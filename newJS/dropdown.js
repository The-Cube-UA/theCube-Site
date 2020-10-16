var a = 0;var b = 0;var c = 0;var d = 0;var e = 0;var f = 0;var g = 0;var h = 0;var i = 0;var j = 0;var k = 0;

// Functions for dropdown arrows.
function bestPrinterExpand() {
  a++;
  if (a%2 === 1) {
    document.getElementById("dropdownContent").style.display = "block";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("collapse").style.visibility = "visible";
  } else {
    document.getElementById("dropdownContent").style.display = "none";
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("collapse").style.visibility = "hidden";
  }
}

function bestFilament() {
  b++;
  if (b%2 === 1) {
    document.getElementById("dropdownContent2").style.display = "block";
    document.getElementById("show2").style.visibility = "hidden";
    document.getElementById("collapse2").style.visibility = "visible";
  } else {
    document.getElementById("dropdownContent2").style.display = "none";
    document.getElementById("show2").style.visibility = "visible";
    document.getElementById("collapse2").style.visibility = "hidden";
  }
}


//Functions for dropdowns in tables.

function expandDremel() {
  c++;
  if (c%2 === 1) {
    document.getElementById("dremelHidden").style.display = "block";
  } else {
    document.getElementById("dremelHidden").style.display = "none";
  }
}

function expandS5() {
  d++;
  if (d%2 === 1) {
    document.getElementById("s5Hidden").style.display = "block";
  } else {
    document.getElementById("s5Hidden").style.display = "none";
  }
}

function expandMKF() {
  e++;
  if (e%2 === 1) {
    document.getElementById("mkfHidden").style.display = "block";
  } else {
    document.getElementById("mkfHidden").style.display = "none";
  }
}

function expandDimension() {
  f++;
  if (f%2 === 1) {
    document.getElementById("dimensionHidden").style.display = "block";
  } else {
    document.getElementById("dimensionHidden").style.display = "none";
  }
}

function expandForm3() {
  g++;
  if (g%2 === 1) {
    document.getElementById("form3Hidden").style.display = "block";
  } else {
    document.getElementById("form3Hidden").style.display = "none";
  }
}

function expand2500() {
  h++;
  if (h%2 === 1) {
    document.getElementById("projet2500Hidden").style.display = "block";
  } else {
    document.getElementById("projet2500Hidden").style.display = "none";
  }
}

function expand3L() {
  i++;
  if (i%2 === 1) {
    document.getElementById("form3LHidden").style.display = "block";
  } else {
    document.getElementById("form3LHidden").style.display = "none";
  }
}

function expandBlackBelt() {
  j++;
  if (j%2 === 1) {
    document.getElementById("blackBeltHidden").style.display = "block";
  } else {
    document.getElementById("blackBeltHidden").style.display = "none";
  }
}

function expand460() {
  k++;
  if (k%2 === 1) {
    document.getElementById("460Hidden").style.display = "block";
  } else {
    document.getElementById("460Hidden").style.display = "none";
  }
}
