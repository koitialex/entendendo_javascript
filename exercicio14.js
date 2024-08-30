let num = 0;
let mensagem = "";
let pergunta = ""
let continuar = "s"; 
let vazio = ""

do {
    num = parseInt(prompt("digite um número para fazer a tabuada dela"));
    let tabuada = "";
    for (let i = 0; i <= 10 ; i++) {
        tabuada += `${num} x ${i} = ${num * i}\n `; 
    }
    alert(tabuada)
     
    continuar = prompt("Deseja fazer uma outra tabuada ? \n Digite s=sim ou n=não"); 

    if (continuar == "s"){
        alert ("ok")
    }
    else if (continuar == " "){
        alert (continuar)
    }
} while (continuar == `s`);
alert ("fim")
