let n1,n2 = 0
let calculatora = " "
let r = 0
calculatora = prompt (`Escolha um modo de calculo : 
                       a - Soma
                       b - Subtração
                       c - Multiplicação
                       d - Divisão
                       e - Potenciação
                       f - Radiciação `);

n1 = parseInt(prompt("digite um número"));
n2 = parseInt(prompt("digite outro número"));

switch (calculatora){
    case "a": 
        r = n1 + n2;
        alert (`${n1} somado com ${n2} resulta em ${r.toFixed(2)}`);
        break; 
    case "b": 
        r = n1 - n2
        alert (`${n1} subtraido por ${n2} resulta em ${r.toFixed(2)}`);
        brea;k 
    case "c": 
        r = n1 * n2
        alert (`${n1} multiplicado por ${n2} resulta em ${r.toFixed(2)}`);
        break; 
    case "d": 
            
        if(n2 === 0){
            alert("operação inválido");
        }
        else if (n2 >= 0){
            r = n1 / n2;    
            alert (`${n1} dividido por ${n2} resulta em ${r.toFixed(2)}`);
        }
        break; 
    case "e": 
        r = n1 ** n2;
        alert (`${n1} potencializado por ${n2} resulta em ${r.toFixed(2)}`);
        break; 
    case "f": 
        r = n1 ** (1/n2);
        alert (`${n1} radiciado por ${n2} resulta em ${r.toFixed(2)}`);
        break; 

}
