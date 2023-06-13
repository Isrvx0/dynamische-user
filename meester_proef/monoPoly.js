let board_game = document.querySelectorAll("button")
// let snake_up = ["13" , "30"] // +10
// let snack_down = ["15" , "24"] // -10
let snack_place = ["13", "30", "15", "24"]
rollen_button.onclick = rollen;
// score_button.onclick 
help_button.onclick = help;

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
        
                newBtn.onclick = change_background;
        }}
            
// ------------------------------ Rollen :
function rollen(e) {
        alert ("YOU ROLLED: " + (Math.floor(Math.random() * 12+1)) + "🎲");
};

// ------------------------------ Help Option :
function help(e) {
        window.open("image/handleiding.pdf");};

// ------------------------------ Pionnen :
function change_background(e) {
        var new_className = 0;
        showAlert = true
        var player_turn = prompt("Which player is trun now?");
        let board_game = document.querySelectorAll("button")
        

        for (button of board_game) {
                var style = button.style.background;
                var class_name = button.className;
                var this_className = this.className;

                if (style === player_turn ) { // Check if other className have the same background color!
                        button.style.background = "white";
                }               
                
                if (this_className === snack_place[0]|| this_className === snack_place[1]) {
                        new_className = parseInt(this_className) + 10;
                        if (showAlert){
                                alert("You land on the highest numbered square of the snake, and you will land on the lowest numbered square.")
                        }
                } else if (this_className === snack_place[2]|| this_className === snack_place[3]) {
                        new_className = parseInt(this_className) - 10;
                        
                        if (showAlert){
                                alert("You land on the lowest numbered square of the snake, and you will land on the highest numbered square.")
                        }

                };
                showAlert = false

                
                if (new_className > 0) {
                        if (parseInt(class_name) === new_className) {
                                button.style.background = `${player_turn}`
                        } 
                } else if (new_className === 0) {
                        this.style.background = `${player_turn}`
                }
        }
        
        
        // class_name = this.className
        // for ( number of snake_up) {
        //         if ( number === class_name ){
        //                 class_name =  parseInt(class_name ) + 10

        //                 for (button of board_game) {
        //                         var clas = button.className;
        //                         if (parseInt(clas) === class_name) {
        //                                 console.log("hello")
        //                                 this.style.background = "white"
        //                                 button.style.background = `${player_turn}`

        //                         }
        //                 }
        //         }

        // }
};

// ------------------------------ check snack position :


createCard();

// function change_background(e) {
//         var player_turn = prompt("Which player is trun now?");
//         let board_game = document.querySelectorAll("button")
//         var newClass = 0;

//         for (button of board_game) {
//                 var style = button.style.background;
//                 var class_name = button.className;
//                 var this_className = this.className;

//                 if (style === player_turn ) {
//                         button.style.background = "white";
//                 };
//                 if (this_className === snack_place[0] && this_className === snack_place[1]) {
//                         var newClass = parseInt(this_className) + 10;
//                 } else if (this_className === snack_place[2] && this_className === snack_place[3]) {
//                         var newClass = parseInt(this_className) - 10;
//                 };
                
//                 if (class_name == this_className ) {
//                         this.style.background = "white"
//                         button.style.background = `${player_turn}`
//                 } else {
//                         this.style.background = `${player_turn}`

//                 }
//                 ;
                

//         }
//         this.style.background = `${player_turn}`
        
//         class_name = this.className
//         for ( number of snake_up) {
//                 if ( number === class_name ){
//                         class_name =  parseInt(class_name ) + 10
//                         console.log(class_name)

//                         for (button of board_game) {
//                                 var clas = button.className;
//                                 if (parseInt(clas) === class_name) {
//                                         console.log("hello")
//                                         this.style.background = "white"
//                                         button.style.background = `${player_turn}`

//                                 }
//                         }
//                 }

//         }
// };










// planning =
// - make trello . 
// - make stappen-plane . 
// - check code .
// - DRY code . 
// - Inleveren . 