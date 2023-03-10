function drank_bestellen(){
    const dranks = {
        "bier" : 2.50,
        "wijn" : 3.75,
        "fris" : 1.65
    };

   let keuze_not_in_drank = true;
    while (keuze_not_in_drank){
        var keuze = prompt("Wat wilt u bestellen?  ");
        if (keuze in dranks || keuze == "stop") {
            keuze_not_in_drank = false;
        }
        else{
            alert("Sorry! Dat hebben we niet! ")
        }
    }
    return keuze
}

function hoeveelheid_kiezen(drank){
    var aantal = parseInt(prompt("Hoeveel " + drank + " wilt u hebben?"));
    return aantal
}


var bon = {"bier":{naam: "bier",prijs: 2.50, amount: 0} , "wijn":{naam: "wijn",prijs: 3.75,amount: 0},"fris":{naam: "fris",prijs: 1.65,amount: 0}}
var meer_bestellen = true
var totaal_prijs = 0;

while (meer_bestellen){
    var bestellen = drank_bestellen();
    if (bestellen != "stop"){
        hoeveelheid = hoeveelheid_kiezen(bestellen);
        bon[bestellen].amount += hoeveelheid;
    } else{
        for (item in bon){
            totaal_prijs +=  bon[item].prijs * bon[item].amount;
            if (bon[item].amount == 0){
                delete bon[item];
            }
        }
        console.log(bon);
        console.log("totaal prijs:   " + totaal_prijs);
        meer_bestellen = false;
    }
}