

// Exercice 1 : Complétez le code ci-dessous pour afficher "Bonjour, Monde!" dans la console.

console.log("bonjour,monde!");


// Exercice 2 : Complétez la fonction add pour additionner deux nombres et afficher le résultat.

function addition(a, b) {
    let sum = a + b;
    console.log(sum);
    }
    
    // Appel de la fonction pour tester
    addition(3, 5); // Devrait afficher 8


// Exercice 3 : Complétez la fonction isEven pour vérifier si un nombre est pair ou impair.

function isEven(number) {
    // if (number % 2 === 0) {
    // return "pair";
    // } else {
    // return "impaire";
    // }
    // }
    return (number % 2) === 0 ? "pair":"impair";
}
    
    // Appel de la fonction pour tester
    console.log(isEven(4)); // Devrait afficher "Pair"
    console.log(isEven(7)); // Devrait afficher "Impair"


// Exercice 4 : Complétez la fonction countWords pour compter le nombre de mots dans une chaîne de caractères.

function countWords(str) {
    let words = str.split(" ");
    return words.length;
    }
    
    // Appel de la fonction pour tester
    console.log(countWords("Bonjour tout le monde")); // Devrait afficher 4
    console.log(countWords("JavaScript est amusant")); // Devrait afficher 3


    // Exercice 5 : Complétez la fonction reverseString pour inverser une chaîne de caractères.

function reverseString(_______) {
    let reversed = str.________('').________()._________('');
    return _________;
    }
    
    // Appel de la fonction pour tester
    console.log(____________("Bonjour")); // Devrait afficher "ruojnoB"
    console.log(____________("JavaScript")); // Devrait afficher "tpircSavaJ"