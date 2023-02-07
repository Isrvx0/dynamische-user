alert('nu zitten we in de logic')

console.log('nu zitten we in de logic'); 

function clicked_button(event){
    console.log('clicked button');
    var div = document.getElementById("result");
    var name = prompt('Wat is je naam')
    div.innerHTML = 'Hallo vanuit de button ...';
    }

buttom = document.getElementById("start")

buttom.onclick = clicked_button


//clicked_button(1)