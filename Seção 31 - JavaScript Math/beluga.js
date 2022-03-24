function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return (total / qtd).toFixed(2);
}

//var num = prompt('Digite um número:');
//num = parseInt(num);
//console.log(sortear(num));

function sortear(x){   
                    
    var sorteado = 0;              
    sorteado = Math.random() * x;
    return Math.round(sorteado);
}

