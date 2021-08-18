function about() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("aboutOverlay").style.display = "block";
  //document.getElementById("aboutClose").style.display = "block";
}

function closeOverlay() {
  document.getElementById("aboutOverlay").style.display = "none";
  //document.getElementById("aboutClose").style.display = "none";
}

function openRightMenu() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}