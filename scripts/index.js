function about() {
    closeRightMenu();
    document.getElementById("myOverlay").style.display = "block";
}

function openRightMenu() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  //document.getElementById("mySidebar").classList.toggle('w3-animate-right');
  //document.getElementById("mySidebar").classList.toggle('w3-animate-left');
}

function closeRightMenu() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  //document.getElementById("mySidebar").classList.toggle('w3-animate-right');
  //document.getElementById("mySidebar").classList.toggle('w3-animate-left');
}