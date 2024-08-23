let n1, n2, n3 = 0;
n1 = parseFloat(prompt ("digite um núumero")); 
n2 = parseFloat(prompt ("digite outro núumero"));
n3 = parseFloat(prompt ("digite ultimo núumero"));

let maior = " ";

if (n1 > n2 && n1 > n3){
    
    maior = n1
}
else if (n2 > n1 && n2 > n3){
    
    maior = n2
}
else {
   
    maior = n3
}
 
 
let mensagem = " ,é o maior número";
alert( maior + " " + mensagem );
