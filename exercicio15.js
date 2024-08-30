let pp = 0 //preço do pão
let num = 0
let pao = 50 
let tabela = ""
let plural = ""

    pp = parseInt (prompt("Quando custa o pão?"))

    for (let i = 1; i <= 50 ; i++ ) {
        let pr = pp * i
        tabela += `${i} unid = R$ ${pr.toFixed(2)}  <br>` ;   

    }
    document.write(tabela)
