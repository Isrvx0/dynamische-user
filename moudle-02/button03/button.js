const numbers= [5,10,15,20,25,30];  
var width = (window.innerWidth - 100) / 11;
var height = (window.innerHeight - 100) / 17;

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
      newBtn.style.padding = `${height}px ${width}px`;
      newBtn.style.margin = `5px`;
      newBtn.style.backgroundColor = "green";
      newBtn.style.color = "white";
      newBtn.style.fontFamily= "Serif";
    }
