let nota1trim;
let nota2trim;
let resultado;

function calcular() {
    nota1trim = Number(prompt ("digite a nota do primeiro trimestre"));
     nota2trim = Number(prompt ("digite a nota do segundo trimestre"));

     resultado = 180 - (nota1trim + nota2trim);

    if(resultado <= 0){
        alert("parabens!, Voce está aprovado, mas eu ainda quero voltar pra ela");
    } else {
        alert("você ainda precisa tirar" + resultado + "no terceiro trimestere para se aprovado, davi gay");
    }

    }