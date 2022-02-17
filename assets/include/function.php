<?php function comparaison ( $x , $y ){
      if ($x > $y){
        $resultat = " La variable $x est plus grand que $y";
      } else if ($y > $x){
        $resultat = "La variable $y est plus grand que $x";
      } else {
        $resultat =" La variables sont égaux : $x $y ";
      }
      return $resultat;
}
?>
