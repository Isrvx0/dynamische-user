let flippedCards = [];
let chosenButtons = [];
let clickPic = 0;
let wonCards = 0;

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
  for(let number = 1; number < 8 +1; number++){
        let newBtn = document.createElement('button');
        document.querySelector('#buttons').appendChild(newBtn);
        newBtn.className = `${number}`;

        newBtn.onmouseover = function() {mousoverBTN(newBtn)};
        newBtn.onmouseout = function() {mouseOutBTN(newBtn)};
        newBtn.number = number;
        newBtn.clicks = 0;
        
        newBtn.addEventListener('click', flipCard)
    }};


function checkMatch() {
  clickPic ++

  const cards = document.querySelectorAll('button')
  const firstCardValue = flippedCards[0];
  const secondCardValue = flippedCards[1];
  if (firstCardValue === secondCardValue) {
    // Matched
    cards[firstCardValue-1].disabled = true;
    cards[parseInt(firstCardValue)+7].disabled = true;
    wonCards ++
    document.getElementById("result").innerHTML = `${wonCards}`;
    if (wonCards == 8){
      document.getElementById("endResult").innerHTML = `Congratulations! You found them all in ${clickPic} times`;
    }
  
  } else {
    let card = 0;
    while (card < cards.length) {
      if (cards[card].className == (parseInt(firstCardValue))){
        cards[card].style.background =  "url('image/background.jpg')";
      } else if (cards[card].className == (parseInt(secondCardValue))){
        cards[card].style.background =  "url('image/background.jpg')";
      }
      card++
    }
    }
flippedCards = [];
}



function flipCard() {
  this.style.backgroundImage = `url('image/image${this.className}.jpg')`;
  let thisCard_class = this.className;
  flippedCards.push(thisCard_class);
  if (flippedCards.length === 2) {
    setTimeout(checkMatch,500)
  }
};




// mouseOVER en mouseOUT = 
function mousoverBTN(x) {
  x.style.transform = "scale(0.90)";
}
function mouseOutBTN(x) {
  x.style.transform = "scale(1)";
}

createCard()
createCard()
