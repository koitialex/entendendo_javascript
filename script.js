// Informe se um aluno está aprovado,de recuperação ou reprovado 
//seguindo os seguntes critérios: 3 notas
//média > 6: aprovado
//média < 4: reprovado  

let nota1,nota2,nota3 = 0
let nome = " "

nome = prompt("nome do aluno");
nota1 = prompt("coloque o primeira nota");
nota1 = parseFloat (nota1);

nota2 = prompt("coloque a segunda nota");
nota2 = parseFloat(nota2);

nota3 = prompt("coloque a treceira nota");
nota3 = parseFloat(nota3);

let media = 0

media = (nota1+nota2+nota3)/3;

if (media > 6){alert("está aprovado")
}else if (media < 4) {alert("está reprovado") 
}else if (media = 5)alert("está em recuperação")



//let mensagem = "Parabéns " + nome + " tirou a média de " + media;
//alert (mensagem);

//alert("está aprovado")
//} else if (4> media < 6) {
//    alert("está em recuperação")
//} else (media <= 4) 
//    alert("está  reprovado")



