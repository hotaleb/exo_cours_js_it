// function abrakadabra() {
//     let prenom =prompt ("quel est le votre prenom?")
//     let nom =prompt ("quel est le votre nom?")
//     let age =prompt ("quel est le votre age?")

//     alert("bonjour"+ prenom + nom  +"tu a"+ age)
// }

// abrakadabra() 
    function IMC(Poids, Taille) {
        Taille = prompt ("ta taille")
        Poids = prompt ("ton poid")

        let TailleEnMetre = Taille / 100;
        let sum = Poids / (TailleEnMetre * TailleEnMetre);

        alert(sum)

        
    }

    IMC()
