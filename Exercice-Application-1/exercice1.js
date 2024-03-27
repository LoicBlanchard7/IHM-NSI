// 3. Déclarer une variable somme initialisé à 0.
var somme = 0;

// 4. Déclarer une variable nombreBoucle initialisé à 20.
var nombreBoucle = 20;

// 7. Modifier votre programme pour demander à l'utilisateur le nombre de boucle.
// var nombreBoucle = prompt("Combien de boucle ?");


// 5. Faîtes la somme de tous les entiers de 0 à nombreBoucle.
for (var i = 1; i <= nombreBoucle; i++) {
    // Ajouter l'entier actuel à la somme
    somme += i;
}

// 6. Afficher la somme
console.log("La somme des entiers de 1 à " + nombreBoucle + " est : " + somme);


// 8. Déclarer la fonction functionClic()