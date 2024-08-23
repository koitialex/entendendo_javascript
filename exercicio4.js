let n1, n2, n3 = 0;
n1 = parseFloat(prompt ("digite um núumero")); 
n2 = parseFloat(prompt ("digite outro núumero"));
n3 = parseFloat(prompt ("digite ultimo núumero"));

let maior = " ";

if (n1 > n2){
    mensagem = "o primeiro número é o maior"
}
else if (n1 > n3){
    mensagem = "o primeiro número é o maior"
    maior = n1
}

else if (n2 > n1){
    mensagem = "o segundo número é o maior"
}
else if (n2 > n3){
    mensagem = "o segundo número é o maior"
    maior = n2
}

else if (n3 > n1){
    mensagem = "o terceiro número é o maior"
}
else if (n3 > n2){
    mensagem = "o terceiro número é o maior"
}
else {
    mensagem = "o terceiro número é o maior"
    maior = n3
}
let mensagem = " ";
alert(mensagem);
