let n1,n2,n3 = 0;
n1 = parseFloat(prompt("Digite um número"));
n2 = parseFloat(prompt("Digite outro número"));
n3 = parseFloat(prompt("Digite último número"));

let maior, menor = 0

if (n1 >= n2 && n1 >= n3){
    maior = n1;
}
else if (n2 >= n1 && n2 >= n3){
    maior = n2;
 
}
else if (n3 >= n1 && n3 >= n2){  
    maior = n3;
}
if (n1 <= n2 && n1 <= n2){
    menor = n1;
}    
else if (n1 <= n2 && n1 <= n2){
    menor = n2;
}    
else{
    menor = n3;
}  
alert('O número ${maior} é o maior de todos e o número ${menor} é o menor de todos ')  