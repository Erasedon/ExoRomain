//exo 1 //
var a = 5 ;
console.log("Prendre une variables en php (la déclaration d'une variable se fait avec un $ en php), affecter une valeur à cette variable et l'afficher" , a);

//exo1 //
//exo 2//
console.log("Prendre deux variables en php, affecter une valeur à chaque variable, afficher le résultat de l'addition, de la soustraction, et de la multiplication de ces deux variables");
var nomb1 = 4; 
var nomb2 = 5; 

let resultat = nomb1 + nomb2; 

console.log(resultat)

let resultatmoins = nomb1 - nomb2; 

console.log(resultatmoins)

let resultatdiv = nomb1 / nomb2; 

console.log(resultatdiv)

let resultatmulti = nomb1 * nomb2; 

console.log(resultatmulti)

//exo 2 // 

//exo 3 //

console.log("Prendre une variable en php et affecter une chaine de caracètere à cette variable et l'afficher ");

let chainecaract = "Coucou petite perruche,  !az!zaef az";

console.log(chainecaract);

// exo 3//
// exo 4// 

console.log("Afficher à l'aide des deux variables déjà défini le texte contenu dans les variables à l'aide d'une concaténation (un espace est souhaitée entre les deux variables) \n");
let testa = "coucou";
let testb = "petite perruche";

console.log(testa ," ", testb);

// exo 4//
// exo 5 //


console.log("Permutter le contenu de la variable a et de la variable b \n ");
 var valeura = 20 ;
 var valeurb = 30 ;

console.log("La valeur de a est maintenat : ",valeura,", la valeur de b est maintenant : ",valeurb," \n");

var c = valeura;
var valeura = valeurb;
var valeurb = c;

console.log("La valeur de a est maintenat : ",valeura,", la valeur de b est maintenant : ",valeurb,"");

// exo 6//

console.log("A partir d'un algorithme, définir dans tout les cas possibles quels chiffre est le plus grand (vous pouvez changer les valeurs des variables a et b pour tester toutes les possiblités) \n");
let vara = 40 ;
let varb = 30 ;

if (vara > varb){
  console.log (" La variable ",vara," est plus grand que ",varb,"");
} else if (varb > vara){
  console.log (" La variable ",varb," est plus grand que ",vara,"");
} else {
  console.log(" La variables sont égaux : ",vara ,varb, "");
}
//exo 6// 
//exo 7 //

console.log ("faire une fonction qui prend en parametres deux variables ( a et b par exemple ) et qui définis quel chiffre est le plus grand \n");
let toto = 30 ;
let tata = 30 ;
/* Code à ajouter ci-dessous */
let result = comparaison( toto, tata);
console.log (result);
function comparaison(x,y){
    
    if (x > y){
        resultat = " La variable "+x+" est plus grand que "+y+"";
    } else if (y > x){
      resultat =  " La variable "+y+" est plus grand que "+x+"";
    } else {
      resultat =" La variables sont égaux : "+x + y+" ";
    }
    return resultat;
}
// exo 7 //
// exo 8 //
console.log("afficher un nombre aléatoire à partir de la fonction math \n");
const min  = 0
const max = 100 

var nombrealeatiore =  Math.floor(Math.random() * (max - min) + min);
console.log(nombrealeatiore);
// exo 8 //
// exo 9// 
console.log("afficher 10 nombre aléatoire à partir de la fonction math.random() en utilisant une boucle \n");
console.log("Exo 9");  
for (var ra = 0; ra < 10; ra++) {     
  console.log(Math.floor(Math.random() * 100)); 
}
// exo 9// 
// exo 10 //
console.log("afficher des nombres aléatoires compris entre 1 et 100 et s'arreter quand le dernier chiffre est >90 \n");
/* Code à ajouter ci-dessous */
const min1 = 0
const max1 = 100 

var nombrealeatiore1 = 0 ;

while( nombrealeatiore1 < 90){
    nombrealeatiore1 = Math.floor(Math.random() * (max1 - min1) + min1);
  console.log (nombrealeatiore1);
  console.log("\n");
}
// exo 10 //
// exo 11 //

console.log("Afficher une variable entrée manuellement par l'utilisateur\n");
/* Code à ajouter ci-dessous */
function afficher(form2) {
  var affi =document. form2.input.value;
  document.form2.output.value=affi
  console.log(affi)
  }
// exo 11 //
// exo 12 //

console.log ("Demander à l'utilisateur d'entrer un nombre entier et afficher si ce chiffre est pair ou impair<br>");
/* Code à ajouter ci-dessous */
function check(){
  var nbr;
  nbr = Number(document.getElementById("myInput").value);
  if(nbr%2 == 0)
  {
         console.log("Nombre pair :"+nbr);
  }
  else
  {
         console.log("Nombre impair :"+nbr);
  }
}
// exo 12 //
// exo 13 //

console.log ("Même exercice que n°12, mais rajouter un message d'erreur si l'utilisateur n'entre pas un nombre entier<br>");
/* Code à ajouter ci-dessous */
function check2(){
  var nbr;
   nbr=Number(document.getElementById("myInput").value);
  if (isNaN(nbr)){
      document.getElementById("msg").innerHTML="Entrez uniquement une valeur numérique";
      return false;
  }else{
      if(nbr%2 == 0)
      {
             console.log("Nombre pair ");
      }
      else
      {
             console.log("Nombre impair");
      }
      return true;
    
  }
}
// exo 13 //
// exo 14 //

console.log ("Demander à l'utilisateur d'entrer une année, et afficher si cette année est sextile ou bissextile<br>");
/* Code à ajouter ci-dessous */

// exo 14 //
// exo 15 //

console.log ("Demander à l'utilisateur d'entrer une date, et afficher si cette date est valide ou non<br>");
/* Code à ajouter ci-dessous */

// exo 15 //