let profileShareDiv = document.getElementById("profile-share-div");
let shareBox = document.getElementById("share-box");
let shareImg = document.getElementById("share-img");
let mediaQuery = window.matchMedia("(max-width:768px)");

profileShareDiv.addEventListener("click", () => {
  
  shareBox.style.visibility = shareBox.style.visibility === "visible" ? "hidden" : "visible";

  if (shareBox.style.visibility === "visible") {
    if (mediaQuery.matches) {
      profileShareDiv.style.backgroundColor = "#d6e6f6";
      shareBox.style.filter = "brightness(1)";
    } 
    else {
      profileShareDiv.style.backgroundColor = "#48556a";
      shareImg.style.filter = "brightness(1.75)";
    }
  } 

  else {
    profileShareDiv.style.backgroundColor = "#d6e6f6";
    shareImg.style.filter = "brightness(1)";
  }
});
