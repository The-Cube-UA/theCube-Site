var i = 0;

function myFunction() {
  i++;
  if (i%2 === 1) {
    document.getElementById("dropdownContent").style.display = "block";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("collapse").style.visibility = "visible";
  } else {
    document.getElementById("dropdownContent").style.display = "none";
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("collapse").style.visibility = "hidden";
  }
}


function myFunction2() {
  i++;
  if (i%2 === 1) {
    document.getElementById("dropdownContent2").style.display = "block";
    document.getElementById("show2").style.visibility = "hidden";
    document.getElementById("collapse2").style.visibility = "visible";
  } else {
    document.getElementById("dropdownContent2").style.display = "none";
    document.getElementById("show2").style.visibility = "visible";
    document.getElementById("collapse2").style.visibility = "hidden";
  }
}
