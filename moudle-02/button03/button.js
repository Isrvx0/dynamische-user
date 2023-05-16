const numbers= [5,10,15,20,25,30];  
var width = window.innerWidth - 100;
var height = window.innerHeight - 100;

var hihi = (width /5) / 5;
var hoho = (height /5) / 5;

for(let number = 1; number < 31; number++){
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
      newBtn.style.padding = `10px ${hihi}px 1px ${hihi}px`;
      newBtn.style.margin = `10px`;
      newBtn.style.backgroundColor = "green";
      newBtn.style.color = "white";

    }

    // if(number in numbers){
    //     document.querySelector('#container').appendChild(lineBreak);
    //     };



