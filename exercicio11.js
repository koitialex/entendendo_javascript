let calculo = 0;
let g = 0;
let medida = " ";
let r = 0; //resultado
let mensagem = " "

medida = (prompt(` escolha para fazer a converção : 
                   a - celsius para fahrenheit
                   b - fahrenheit para celsius `));
 //if                  
if ("b") {
    alert ("digite um número entre -459 para 212")
}
else if("a") {
    alert ("digite um número entre -100 para 100") 
}

g = parseInt(prompt("Quantos graus? "));
//switch
switch (medida){ 

    case "a":
        r = (g * 9/5) + 32;
        mensagem = `${g}º celsius é ${r.toFixed(1)}º fahrenheit `
        break;

    case "b": 
        
        r = (g - 32) * 5/9;
        mensagem = `${g}º fahrenheit é ${r.toFixed(1)}º celsius `
        break;

}
alert (mensagem)
