from cgi import print_environ

# exo 1 #
print("Prendre une variables en python, affecter une valeur à cette variable et l'afficher \n ") 
a = 5 
print(a ,"\n")
# Exo 1 #
# Exo 2 # 

print("Prendre deux variables en php, affecter une valeur à chaque variable, afficher le résultat de l'addition, de la soustraction, et de la multiplication de ces deux variables \n") 
a = 20
b = 5  
resultplus = a + b
resultmoins = a - b
resultdiv = a / b
resultmulti = a * b

print(resultplus)
print(resultmoins)
print(resultdiv)
print(resultmulti, "\n")
# Exo 2 #
# Exo 3 # 

print("Prendre une variable en php et affecter une chaine de caracètere à cette variable et l'afficher \n ") 
 

chainecaract = "Coucou petite perruche,  !az!zaef az \n"

print(chainecaract)
# Exo 3 #
# Exo 4 # 

print("Afficher à l'aide des deux variables déjà défini le texte contenu dans les variables à l'aide d'une concaténation (un espace est souhaitée entre les deux variables \n") 

testa = "coucou"
testb = "petite perruche \n"

print(testa ," ", testb)

# Exo 4 #
# Exo 5 # 

print("Permutter le contenu de la variable a et de la variable b \n ") 

valeura = 20 
valeurb = 30 

print("La valeur de a est maintenat : ",valeura,", la valeur de b est maintenant : ",valeurb," \n")

c = valeura
valeura = valeurb
valeurb = c

print("La valeur de a est maintenat : ",valeura,", la valeur de b est maintenant : ",valeurb,"\n")

# Exo 5 #
# Exo  6//

print("A partir d'un algorithme, définir dans tout les cas possibles quels chiffre est le plus grand (vous pouvez changer les valeurs des variables a et b pour tester toutes les possiblités) \n") 

vara = 40  
varb = 30  

if vara > varb :
  
    print("La variable ",vara," est plus grand que ",varb,"") 

elif varb > vara:
  
    print(" La variable ",varb," est plus grand que ",vara,"") 

else :
  print(" La variables sont égaux : ",vara ,varb, "") 

#exo 6#
#exo 7#

print ("faire une fonction qui prend en parametres deux variables ( a et b par exemple ) et qui définis quel chiffre est le plus grand \n") 

toto = 30  
tata = 30  


def comparaison(x,y) :
    
    if x > y :
        resultat = " La variable "+x+" est plus grand que "+y+"" 
    elif y > x:
      resultat =  " La variable "+y+" est plus grand que "+x+"" 
    else :
      resultat =" La variables sont égaux : ",x,y,"" 
    
    return resultat 


result = comparaison( toto, tata) 
print (result) 
# Exo  7 //
# Exo  8 //
print("afficher un nombre aléatoire à partir de la fonction math \n") 
import random

min = 0 
max = 100 
nombrealeatiore = random.randint(min,max)
print(nombrealeatiore) 
# Exo  8 //
# Exo  9// 
print("afficher 10 nombre aléatoire à partir de la fonction math.random() en utilisant une boucle \n") 

def getRandomInt(max) :
    for i in range(10):
        print(random.randint(0,max)) 
   

getRandomInt(max) 
# Exo  9// 
# Exo  10 //
print("afficher des nombres aléatoires compris entre 1 et 100 et s'arreter quand le dernier chiffre est >90 \n") 

min1 = 0
max1 = 100 

nombrealeatiore1 = 0  

while( nombrealeatiore1 < 90):
    nombrealeatiore1 = random.randint(min1,max1)
print (nombrealeatiore1) 
print("\n") 

# Exo  10 //
# Exo  11 //

print("Afficher une variable entrée manuellement par l'utilisateur\n") 

print ("Veuillez entrer un nombre positif quelconque : ")
nn = int(input())
print("Le carré de", nn,"vaut", nn**2 ,"\n")


# Exo  11 //
# Exo  12 //

print ("Demander à l'utilisateur d'entrer un nombre entier et afficher si ce chiffre est pair ou impair \n") 
 
# Demande à l'utilisateur d'entrer un nombre
n = int(input("Entrez un nombre: "))

if (n % 2) == 0:
   print("{0} est Paire \n".format(n)) 
else:
   print("{0} est Impaire \n".format(n))


# Exo  12 //
# Exo  13 //

print ("Même exercice que n°12, mais rajouter un message d'erreur si l'utilisateur n'entre pas un nombre entier \n") 
 
# Demande à l'utilisateur d'entrer un nombre
n = input("Entrez un nombre: ")
try:
    int(n)
    it_is = True
except ValueError:
    it_is = False

if (it_is == True):
    if (int(n) % 2) == 0:
        print("{0} est Paire \n".format(n)) 
    else :
         print("{0} est Impaire \n".format(n))
elif(it_is == False):
    print("erreur ce n'est pas un entier \n")

# Exo  13 //
# Exo  14 //

print ("Demander à l'utilisateur d'entrer une année, et afficher si cette année est sextile ou bissextile \n") 
 

# Exo  14 //
# Exo  15 //

print ("Demander à l'utilisateur d'entrer une date, et afficher si cette date est valide ou non \n") 
 

# Exo  15 //
 
