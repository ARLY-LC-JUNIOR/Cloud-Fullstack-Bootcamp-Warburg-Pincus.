/*faça um algotitimo que, dado as 3 notas tiradas por um aluno em um semestre na faculdade 
/*calcule e imprima a sua média e classificação conforma tabela abaixo
Media = (nota 1 + nota 2 + nota 3);
Classificação
- Media menor que 5, reprovação
- Media entre 5 e 7, recupeção 
- Media acima de 7, passou de sempestre. */
const nota1 = 6;
const nota2 = 8;
const nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de Ano');
}



