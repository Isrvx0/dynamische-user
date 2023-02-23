function boodschap(text){
    var char = " ";
    var testen = " ";
    for (character in text){
        if(text[character] == '['){
            testen = "testen werkt";
        } 
        else if (text[character] == ']'){
            testen = "testen werkt niet";
        } else if (testen == "testen werkt"){
            char += text[character]
        }
    }
    return char
}

var text = prompt("Wat is de tekst? ")
console.log(boodschap(text)) 