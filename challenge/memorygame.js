let imageLijst = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
imageLijst = shuffle(imageLijst);
let flippedCards = [];
let card = [];
let card1 = [];
var card_checker = " " ;
var moves = 0;
clickPic = 0;

// shuffelen 
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Create card Function
function createCard (){
  for(let number = 1; number < 10 +1; number++){
        let newBtn = document.createElement('button');
        document.querySelector('#buttons').appendChild(newBtn);
        newBtn.className = `card${number}`;

        //   style
        newBtn.style.padding = `63px 50px`;
        newBtn.style.margin = `5px`;
        newBtn.style.backgroundImage = "url('image/background2.jpg')";
        newBtn.style.borderRadius= "5px";
        newBtn.style.border= "white ";
        newBtn.style.position = "relative";
        newBtn.style.transform = "scale(1)";    
        
        newBtn.onmouseover = function() {mousoverBTN(newBtn)};
        newBtn.onmouseout = function() {mouseOutBTN(newBtn)};
        newBtn.number = number;
        newBtn.clicks = 0;
        
        newBtn.addEventListener('click', function() {
          this.clicks++;
          clickPic ++;
          card1.push(newBtn)


          if (clickPic === 3){
            clickPic = 1;
            if (card_checker === "false"){
              card1[0].style.backgroundImage = "url('image/background2.jpg')";
              card1[1].style.backgroundImage = "url('image/background2.jpg')";
              card1 = [];
              card1.push(newBtn)
            }
            
          };
          if (flippedCards.length < 2) {
            flippedCards.push(newBtn.className);
            card.push(newBtn)
            console.log(flippedCards)
            console.log(card1)

          }
          if (flippedCards.length === 2) {
              // Check if the cards match
              moves++;
              const firstCardValue = flippedCards[0];
              const secondCardValue = flippedCards[1];

              if (firstCardValue === secondCardValue) {
                  // Matched
                  console.log("yessss")
                  card[0].disabled = true;
                  card[1].disabled = true;
                  card_checker = "true";

                } else {
                  // Not matched, flip the cards back after a short delay
                  console.log("noooo")
                  card_checker = "false";

              }
              flippedCards = [];
              card = [];
          }

          if (this.clicks == 1){
            newBtn.style.backgroundImage= `url('image/${imageLijst[number-1]}')`;
            console.log(newBtn.className)

          } if (this.clicks == 2){
            newBtn.style.backgroundImage = "url('image/background2.jpg')";
            this.clicks = 0;
          }
       });
      // Handle card flipping logic
       
      } 
  }



// mouseOVER en mouseOUT = 
function mousoverBTN(x) {
  x.style.transform = "scale(0.90)";
}
function mouseOutBTN(x) {
  x.style.transform = "scale(1)";
}

createCard()
createCard()
