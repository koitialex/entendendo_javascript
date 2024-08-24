let n1, n2, n3 = 0;
n1 = parseFloat(prompt ("digite um núumero")); 
n2 = parseFloat(prompt ("digite outro núumero"));
n3 = parseFloat(prompt ("digite ultimo núumero"));


if (n1 >= n2 && n1 >= n3 ){
    mensagem = "primeiro número é maior que o segundo e o terceiro, " + n1
}
else if (n2 >= n1 && n2 >= n3){
    
    mensagem = "segundo número é maior que o primeiro e o terceiro, " + n2
}
else {
    mensagem = "terceiro número é maior que o segundo e o primeiro, " + n3  
}
 
alert ( mensagem );
