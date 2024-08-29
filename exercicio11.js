let calculo = 0;
let g = 0;
let medida = " ";
let r = 0; //resultado
let mensagem = " "
let celpfah = " "

medida = (prompt(` Escolha para fazer a converção : 
                   a - celsius para fahrenheit
                   b - fahrenheit para celsius `));


//switch----------------------------------------------------------------
switch (medida) {

    case "a":
        g = parseInt(prompt("Quantos graus? "));
        
        r = (g * 9 / 5) + 32;
        mensagem = `${g}º celsius é ${r.toFixed(1)}º fahrenheit `
        break;

    case "b":
        g = parseInt(prompt("Quantos graus? "));
      
        r = (g - 32) * 5 / 9;
        mensagem = `${g}º fahrenheit é ${r.toFixed(1)}º celsius `
        break;
    default :
        mensagem = "erro" 
        

}
alert(mensagem)
