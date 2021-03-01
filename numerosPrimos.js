var num = parseInt(process.argv[2]);

    if (num > 1){
        if ((num > 2) && (num % 2 == 0)){
            console.log("O número " + num + " não é primo");
        }else if ((num > 3) && (num % 3 == 0)){
            console.log("O número " + num + " não é primo");
        }else if ((num > 5) && (num % 5 == 0)){
            console.log("O número " + num + " não é primo");
        }else if ((num > 7) && (num % 7 == 0)){
            console.log("O número " + num + " não é primo");
        }else {
            console.log("O número " + num + " é primo");
        }
    }else {
        console.log("O número " + num + " não é primo");
    }

/*
Para passar o argumento no node, o comando no terminal seria por exemplo: 
node numerosPrimos.js 15
*/
