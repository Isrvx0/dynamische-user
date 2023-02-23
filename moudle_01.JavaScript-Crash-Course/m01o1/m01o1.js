let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
// Berekenen hier het aantal verdiepingen
if (gewenste_aantal_autos <= 80) {
    aantal_verdiepingen = 0
  } else {
    aantal_verdiepingen = Math.ceil(gewenste_aantal_autos / 120)
  }

// Using innerHTML
let antwoord = "Om het gewenste aantal autos kwijt te kunnen heb ik " + aantal_verdiepingen + " verdiepingen nodig.";
document.getElementById("antwoord").innerText = antwoord;

// Using console.log()
console.log("Om het gewenste aantal autos kwijt te kunnen heb ik " + aantal_verdiepingen , " verdiepingen nodig.")

// Using document.write()
document.getElementById("antwoord").write = antwoord;

//Using window.alert()
alert(antwoord)


