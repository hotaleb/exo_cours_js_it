function crieDeGuerre(crie) {
    crie="for the horde"
    console.log(crie)
}

crieDeGuerre()


function addition (numA,numB,sum) {
    sum = numA + numB
    return sum
}
console.log (addition(4,6))






function IMC(Poids, Taille) {
    let TailleEnMetre = Taille / 100;
    // let sum = Poids / (TailleEnMetre * TailleEnMetre);
    let sum = Poids / (Math.pow(Taille))


    console.log(sum);
}

IMC(85, 179);