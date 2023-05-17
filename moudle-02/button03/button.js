const numbers= [5,10,15,20,25,30];  
const container = document.getElementById("container")

var width = (window.innerWidth - 100) / 6;
var height = (window.innerHeight - 100) / 5;
var clicks = 0;

var btn_num = parseInt(prompt("How many buttons do you want to create?  "));

function createButton (button_numbers){
  for(let number = 1; number < button_numbers +1; number++){
        let newBtn = document.createElement('button');
        var lineBreak = document.createElement("br");
      
        newBtn.innerText= number;
        document.querySelector('#container').appendChild(newBtn);

        for (num in numbers){
          if (number == numbers[num]){
              document.querySelector('#container').appendChild(lineBreak);
            };
        }
      
      //   style
        newBtn.style.padding = `${height}px ${width}px`;
        newBtn.style.margin = `5px`;
        newBtn.style.backgroundColor = "green";
        newBtn.style.color = "white";
        newBtn.style.fontFamily= "Serif";
        newBtn.style.fontSize = "45px"

      }
    };

createButton(btn_num)



// container.addEventListener("click", function() { 
//   console.log(this.innerText + "You clicked me");
//   clicks += 1;
// });
