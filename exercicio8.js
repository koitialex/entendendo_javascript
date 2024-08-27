//preço
let p1,p2,p3 = 0
//goods 
let g1,g2,g3 = " "
let mensagem = " "

p1 = parseInt(prompt("Qual é o preço?"));
g1 = (prompt("Nome do produto?"));

p2 = parseInt(prompt("Qual é o preço?"));
g2 = (prompt("Nome do produto?"));

p3 = parseInt(prompt("Qual é o preço?"));
g3 = (prompt("Nome do produto?"));


if (p1 <= p2 && p1 <= p3){
    mensagem = " O produto " + g1 + " que tem o preço " + p1 + " é o mais barato"
}
else if (p2 <= p1 && p2 <= p3){
    mensagem = " O produto " + g2 + " que tem o preço " + p2 + " é o mais barato"   
}
else{
    mensagem = " O produto " + g3 + " que tem o preço " + p3 + " é o mais barato"
}
    
alert (mensagem)