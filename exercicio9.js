let mensagem = " "
let opcao = ` Digite o turno em que o aluno estuda:
              m - matutino
              v - verpertino
              n - Nortuno ` 


let turno = prompt(opcao);


switch (turno){

    case "m": 
        mensagem = "Bom dia";
        break;
    case "v":
        mensagem = " Boa tarde";
        break
    case "n": 
        mensagem = "Boa noite";
        break
    default: 
        mensagem = "Valor inválido";
        break
}

alert( `${mensagem}, seja bem vindo`)
