function openRightMenu() {         
    document.getElementById("rightMenu").style.display = "block";
    //document.getAnimations("rightMenu").slideToggle();
    //document.getElementById("rightMenu").slideToggle();
}
                
function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
    //document.getAnimations("rightMenu").slideToggle();
}

function about() {
    closeRightMenu();
    var box = document.getElementById("about");
    box.style.display = "block";
    box.style.backgroundColor = "rgba(0,0,0,0.85)";
    box.style.zIndex = "1";
}