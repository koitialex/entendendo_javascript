let nome, salario, renda = " "
let horas = 0
nome = prompt (" Qual é o seu nome ?");
salario = parseFloat(prompt (" Quando ganha por hora ?"));
horas = parseFloat(prompt (" Quantas horas trabalhadas por semana ?"));

renda = salario * horas;

mensagem = nome + " ganha " + renda.to; 
alert (mensagem)