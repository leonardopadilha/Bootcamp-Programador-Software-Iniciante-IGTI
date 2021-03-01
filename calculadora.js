var operacao = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

var resultado = 0;

if (operacao === "soma"){
    resultado = num1 + num2;
}else if (operacao === "subtracao"){
    resultado = num1 - num2;
}else if (operacao === "multiplicacao"){
    resultado = num1 * num2;
}else if (operacao === "divisao"){
    resultado = num1 / num2;
}else if (operacao === "resto"){
    resultado = num1 % num2;
}else if (operacao === "porcentagem"){
    resultado = (num1 * num2) / 100;
}


console.log(resultado);


/*
Para passar o argumento no node, o comando no terminal seria por exemplo: 
node calculadora.js subtracao 3 5
*/
