/*
Números Ímpares
Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

Entrada
O arquivo de entrada contém 1 valor inteiro qualquer.

Saída
Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.
*/

function numerosImpares(num){
    for(var i = 0; i <= num;i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

function numerosImparesInverso(num){
    for(var i = num; i >= 0; i--){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

numerosImpares(8);
console.log(" ");
numerosImparesInverso(8);
