<?php
echo ("<br><br><br>====== EXO n°11 ======<br><br>");
echo ("Afficher une variable entrée manuellement par l'utilisateur<br>");
/* Code à ajouter ci-dessous */
echo " <FORM action='index2.php' method='post'>
<INPUT TYPE='text' NAME='cara' VALUE=''> Zone de texte d'entrée <BR>
<input type='Submit' value='envoyer la chaine de caracètere' id='submit'><br>
</FORM>";
$chdecara = $_POST['cara'];
 if($chdecara != null){
        echo "$chdecara";     
 }else{
        echo "la chaine de caracètere est vide";
 }
echo ("<br><br><br>====== EXO n°12 ======<br><br>");
echo ("Demander à l'utilisateur d'entrer un nombre entier et afficher si ce chiffre est pair ou impair<br>");
/* Code à ajouter ci-dessous */
echo " <FORM action='index2.php' method='post'>
<INPUT TYPE='text' NAME='nombre' VALUE=''> Zone de texte d'entrée <BR>
<input type='Submit' value='verifier nombre' id='submit' ><br>
</FORM>";
$nombre = $_POST['nombre'];
 if($nombre != null){
    if ($nombre%2 == 1)
        echo "$nombre est impair";
        else
        echo "$nombre est pair";
 } else{
    echo "la zone est vide";
 }

echo ("<br><br><br>====== EXO n°13 ======<br><br>");
echo ("Même exercice que n°12, mais rajouter un message d'erreur si l'utilisateur n'entre pas un nombre entier<br>");
/* Code à ajouter ci-dessous */
echo " <FORM action='index2.php' method='post'>
<INPUT TYPE='text' NAME='nombre1' VALUE=''>verifier nombre est un entier <BR>
<input type='Submit' value='verifier nombre est un entier' id='submit' ><br>
</FORM>";
$nombre = $_POST['nombre1'];
 if($nombre != null){
    if (is_int($nombre)) {
        echo "c’est un entier\n";
        if ($nombre%2 == 1){
            echo "$nombre est impair";
        }else{
            echo "$nombre est pair";
        }
        } else {
    
            echo "n'est pas un entier\n";
        
        }
    } else{
    echo "la zone est vide";
 }

echo ("<br><br><br>====== EXO n°14 ======<br><br>");
echo ("Demander à l'utilisateur d'entrer une année, et afficher si cette année est sextile ou bissextile<br>");
/* Code à ajouter ci-dessous */

echo ("<br><br><br>====== EXO n°15 ======<br><br>");
echo ("Demander à l'utilisateur d'entrer une date, et afficher si cette date est valide ou non<br>");
/* Code à ajouter ci-dessous */

?>