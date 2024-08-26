let altura = 0 
let idade = 0
//parseint para número quebrado
altura = parseInt(prompt("Qual é sua altura?"));
idade = parseFloat(prompt("Quandos anos você tem?"));

if (altura >= 1,70 ){
    mensagem = " pode andar na montanha russa"
}
else if (altura < 1,70){
    mensagem = " não pode andar na montanha russa"
}

if (idade >= 18) {
    mensagem = " pode entrar"
}
else if (idade < 18){
    mensagem = " não tem permisão"
}

if ( 1,60 < altura > 1,69 && idade >= 18)
    mensagem = " pode entrar na montanha russa"
else {
    mensagem = " não pode entrar"
}
alert ( mensagem)