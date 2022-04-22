import math
##Palabras palindromas

palabra = input("Escriba una cadena de caracteres: ")

def palabra_palindromo(palabra: str)-> str:
    inv = ""
    for letra in palabra:
        inv = letra + palabra
    return inv 

palindromo = palabra_palindromo(palabra)