function oppasser(giraffen , struivogels, zebras){
    var aantal_poten= parseInt((giraffen * 4) + (struivogels * 2) +( zebras * 4))
    return aantal_poten
    }


giraffen = parseInt(prompt("Wat is de aantal giraffen? "))
struivogels = parseInt(prompt("Wat is de aantal struivogels? "))
zebras = parseInt(prompt("Wat is de aantal zebras? "))
console.log("Het aantal poten is: " , oppasser(giraffen,struivogels,zebras))
var antwoord = oppasser(giraffen,struivogels,zebras)
alert("Het aantal poten is: "  + antwoord)