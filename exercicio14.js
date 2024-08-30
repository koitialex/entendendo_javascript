let num = 0
let tabuada = ""
let mensagem = ""
let pergunta = "" 

do {
    num = prompt("digite um número para fazer a tabuada dela")
    mensagem += num <= 10 + `/n` + num++
    mensagem = `${num} x ` 
    pergunta =  prompt("Deseja fazer uma outra tabuada ? sim`/n`Não `/n`")  
} while (sim);