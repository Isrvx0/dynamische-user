var rollen_button = document.getElementsByClassName("rollen_button")
var score_button = document.getElementsByClassName("score_button")
var help_button = document.getElementsByClassName("help_button")

// ------------------------------ Create the game board :
function createCard (){
        for(let number = 1; number < 50 +1; number++){
                let newBtn = document.createElement('button');
                document.querySelector('#game_board').appendChild(newBtn);
                newBtn.className = `vak ${number}`;
                newBtn.innerHTML = number
                
                //   style
                newBtn.style.width = `9.5%`;
                newBtn.style.height = `75px`;
                
                newBtn.style.border= "1px solid white";
                newBtn.style.margin= "3px";

                newBtn.style.color = `black`;
                newBtn.style.display = `inline-block`;
                
                newBtn.style.background = `white`;
                newBtn.style.fontSize = "15pt";
                newBtn.style.textAlign = "center"; 
                newBtn.style.verticalAlign = "middle";
        }}
            
// ------------------------------ Rollen :
function rollen() {
        alert ("YOU ROLLED: " + (Math.floor(Math.random() * 12+1)) + "🎲");
};

// ------------------------------ Help Option :
function help() {
        window.open("image/handleiding.pdf");};

// ------------------------------ Pionnen :
var pion1 = document.getElementById("pion1");
var pion2 = document.getElementById("pion2");
var pion3 = document.getElementById("pion3");
var pion4 = document.getElementById("pion4");

var moving = false;

pion1.addEventListener("mousedown", initialClick, false);
pion2.addEventListener("mousedown", initialClick, false);
pion3.addEventListener("mousedown", initialClick, false);
pion4.addEventListener("mousedown", initialClick, false);


function move(e){
  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";
}

function initialClick(e) {
  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }
  moving = !moving;
  image = this;
  document.addEventListener("mousemove", move, false);
}




createCard()
