/*
    Fonction exercice 1 : Changement de couleur
*/
// Créer les fonctions "changeBleu" et "changeRouge" en dessous.
function changeBleu() {
    var monPara = document.querySelector('#para');
    monPara.classList.add("bleu");
    monPara.classList.remove("rouge");
}

function changeRouge() {
    var monPara = document.querySelector('#para');
    monPara.classList.add("rouge");
    monPara.classList.remove("bleu");
}

/*
    Fonction exercice 2 : Inverser un mot
*/
// Créer la fonction "inverser()" en dessous.
function inverser(){
    var mot = document.getElementById('mot').value;
    console.log(mot)
    var reponse = ""
    for (var i = mot.length - 1; i>=0; i-- ) {
        reponse += mot[i];
    }
    console.log(reponse)

    document.getElementById('motInverse').innerHTML = "Votre mot inversé : " + reponse
}

/*
    Fonction exercice 3 : Calculatrice
*/
function addition() {
    var nombre1 = parseFloat(document.getElementById('nombre1').value);
    var nombre2 = parseFloat(document.getElementById('nombre2').value);
    var resultat = nombre1 + nombre2;
    afficherResultat(resultat);
}

function soustraction() {
    var nombre1 = parseFloat(document.getElementById('nombre1').value);
    var nombre2 = parseFloat(document.getElementById('nombre2').value);
    var resultat = nombre1 - nombre2;
    afficherResultat(resultat);
}

function multiplication() {
    var nombre1 = parseFloat(document.getElementById('nombre1').value);
    var nombre2 = parseFloat(document.getElementById('nombre2').value);
    var resultat = nombre1 * nombre2;
    afficherResultat(resultat);
}

function division() {
    var nombre1 = parseFloat(document.getElementById('nombre1').value);
    var nombre2 = parseFloat(document.getElementById('nombre2').value);
    var resultat = nombre1 / nombre2;
    afficherResultat(resultat);
}

function afficherResultat(resultat) {
    document.getElementById('resultat').innerHTML = "Résultat : " + resultat;
}

/*
    Fonction exercice 4 : Compteur de clic
*/

// Sélectionner le bouton et le compteur
const button = document.getElementById('clicButton');
const affichageClic = document.getElementById('clickCount');

// Initialiser le compteur

// Ajouter un écouteur d'événements au clic sur le bouton