
var mytitle = document.getElementById("title")

function changeColor(){
  mytitle.style.color = "blue"
}

function changeBack() {
  mytitle.style.color = "white";
}

mybio.onmouseover = changeColor;
mybio.onmouseover = changeBack;

//console/log(mytitle); 
