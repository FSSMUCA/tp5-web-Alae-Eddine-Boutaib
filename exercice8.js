function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let totalHT = Number(prompt("Entrez le total HT : "));
let remise = Number(prompt("Entrez la remise en % : "));

let totalFinal = totalAvecRemise(totalHT, remise);
console.log("Total final : " + totalFinal);