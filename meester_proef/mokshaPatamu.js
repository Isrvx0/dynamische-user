let board_game = document.querySelectorAll("button")
// let snake_up = ["13" , "30"] // +10
// let snack_down = ["15" , "24"] // -10
let snack_place = ["13", "30", "15", "24"]
rollen_button.onclick = rollen;
// score_button.onclick 
help_button.onclick = help;
let questionList = ["5", "17", "28", "44", "49"]
// ------------------------------ Create the game board :
function createCard (){
        for(let number = 1; number < 50 +1; number++){
                let newBtn = document.createElement('button');
                document.querySelector('#game_board').appendChild(newBtn);
                newBtn.className = `${number}`;
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
                newBtn.style.position = "relative"
                newBtn.onclick = create_pionnen;

                for (element of questionList) {
                        if (element == newBtn.className) {
                                newBtn.style.background = `#DDA0DD`;
                                newBtn.style.color = `white`;

                        }
                }
        }}
            
// ------------------------------ Rollen :
function rollen(e) {
        alert ("YOU ROLLED: " + (Math.floor(Math.random() * 12+1)) + "🎲");
};

// ------------------------------ Help Option :
function help(e) {
        window.open("image/handleiding.pdf");};

// ------------------------------ Pionnen :
function create_pionnen(e) {
        var new_className = 0;
        showAlert = true
        var player_turn = prompt("Which player is trun now?");
        let board_game = document.querySelectorAll("button")
        

        for (button of board_game) {
                var style = button.style.background;
                var class_name = button.className;
                var this_className = this.className;

                if (style === `light${player_turn}` ) { // Check if other className have the same background color!
                        button.style.background = "white";
                }               
                
                if (this_className === snack_place[0]|| this_className === snack_place[1]) {
                        new_className = parseInt(this_className) + 10;
                        if (showAlert){
                                alert("You land on the lowest numbered square of the snake, and you will land on the highest numbered square.")
                        }
                } else if (this_className === snack_place[2]|| this_className === snack_place[3]) {
                        new_className = parseInt(this_className) - 10;
                        
                        if (showAlert){
                                alert("You land on the highest numbered square of the snake, and you will land on the lowest numbered square.")
                        }

                };
                showAlert = false

                
                if (new_className > 0) {
                        if (parseInt(class_name) === new_className) {
                                button.style.background = `light${player_turn}`
                        } 
                } else if (new_className === 0) {
                        this.style.background = `light${player_turn}`
                }
                
                // for (element of questionList) {
                //         if (element == class_name) {
                //                 new_question;
                //         }
                winner(this_className , this.style.background , board_game);
                
        } 
};

// ------------------------------ Check Winner :
function winner(class_name , style , board_game) {
        if (parseInt(class_name) == 50) {
                alert (`Winner is ${style}`)
                var play_againg = prompt("Do you want to play again? ")
                if (play_againg.toLowerCase() == "yes") {
                        for (button of board_game){
                                button.style.background = "white"
                        }
                }

        }
};

// ------------------------------ Question function :

// function question(e) {

// };


const movingElements = document.getElementsByClassName("moving");

for (let i = 0; i < movingElements.length; i++) { // alle pionnen krijgen relative position

  movingElements[i].style.position = "relative";
  console.log(movingElements[i])
}

function filter(e) {
  let target = e.target;

  if (!target.classList.contains("moving")) { // if element class != "moving" , stopt de function
    return;
  }

  target.moving = true; //otherwise return true en blijft lopen.

  //Check if Mouse events exist on users' device
  if (e.clientX) {
    target.oldX = e.clientX; // If they exist then use Mouse input
    target.oldY = e.clientY;
  } 
//   else { //-- >Otherwise use touch input
//     target.oldX = e.touches[0].clientX; 
//     target.oldY = e.touches[0].clientY;
//   }

  target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1; // getComputedStyle = Het haalt de berekende CSS-eigenschappen en -waarden van een HTML-element op.
  target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1; // getPropertyValue = returns the value of the specified CSS property.


  document.onmousemove = dr; // It occurs when the pointer moves over an element.
//   document.ontouchmove = dr; --> only for touch screen.

  function dr(event) {
    event.preventDefault(); // cancels the event if it is cancelable <Clicking on a link, prevent the link from following the URL>

    if (!target.moving) {
      return;
    }

    if (event.clientX) {
      target.distX = event.clientX - target.oldX;
      target.distY = event.clientY - target.oldY;
    } 

//     else { //-- >Otherwise use touch input
//       target.distX = event.touches[0].clientX - target.oldX;
//       target.distY = event.touches[0].clientY - target.oldY;
//     }

    target.style.left = target.oldLeft + target.distX + "px";
    target.style.top = target.oldTop + target.distY + "px";
  }

  function endDrag() { // einde slepen --> stopt de function
    target.moving = false; 
  }
  target.onmouseup = endDrag;
  target.ontouchend = endDrag;
}
document.onmousedown = filter;
document.ontouchstart = filter;


createCard();




// planning =
// - make trello . 
// - make stappen-plane . 
// - check code .
// - DRY code . 
// - Inleveren . 