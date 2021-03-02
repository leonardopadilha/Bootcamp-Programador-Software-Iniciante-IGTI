var palavra = process.argv[2];
var palavraInvertida = "";

//console.log(palavra[0]);

/*
# Percorre a palavra da primeira até a última posicao
for (var i = 0; i < palavra.length; i++){
    palavraInvertida = palavraInvertida + palavra[i];
}
*/

//Percorre a palavra da última até a primeira posicao
for (var j = palavra.length -1; j >= 0; j--){
    palavraInvertida = palavraInvertida + palavra[j];
}

if (palavra === palavraInvertida){
    console.log("A palavra " + palavra + " é palíndromo");
}else {
    console.log("A palavra " + palavra + " não é palíndromo");
}

/*
Execução: 
node palindromo.js ana

Resposta:
A palavra ana é palíndromo
*/
