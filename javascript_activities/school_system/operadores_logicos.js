const notaFinal = 7;
const faltas = 3;
const advertencias = 0; //seria interpretado como falso no if

if(notaFinal < 7 && faltas > 4) { 
    console.log('Reprovado, boas festas!');
} else {
    console.log('Aprovado, boas festas!');
}

if(faltas >=2 && !advertencias) { //como se fosse uma dupla negacao
        console.log('Recebeu bônus!');
    } else {
        console.log('Não recebeu bônus!');
    }