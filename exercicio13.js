let nome, senha = " ";
let mensagem = " ";
do {
    nome = prompt("Qual é o seu nome");
    senha = prompt(" Insira a sua senha");

    if (nome === senha) {
        mensagem = (" erro, não é permitido ter a senha e o nome iguais");
    }

} while (nome === senha);
mensagem = `Bem vindo ${nome}`;

alert(mensagem);
