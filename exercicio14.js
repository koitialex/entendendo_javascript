let num = 0
let tabuada = " "
 
do {
num = parseFloat(prompt("Digite um número qualquer para fazer a tabuada dela"))
 
tabuada += num * " \n"
num*(num++)  
 
}
while (num <= 10)
    alert ( `${tabuada} Deseja fazer novamente ? `)