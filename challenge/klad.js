function boodschap(text){
    var char = " ";
    var testen = false;
    for (character in text){
        if(text[character] == '['){
            testen = true;
        } else if(text[character] == ']'){
            testen = false;
        } if (testen === true){
            char += text[character]
        }
    }
    return char
}

var textt = prompt("Wat is de tekst? ")
consol.log(boodschap(textt)) 
