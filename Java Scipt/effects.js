var button = document.getElementById("myButton");
var aboutMe = document.getElementById("aboutMe");

// console.log(button);
// console.log(aboutMe);

function showHideaboutMe() {
  aboutMe.style.display = "show";
}

button.onclick = showHideaboutMe;
