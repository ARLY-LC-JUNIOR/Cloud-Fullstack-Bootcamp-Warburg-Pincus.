/*
Fazer um programa para calcular o valor do gasto de combustivel em viagem.
Será disponibilizado 3(tres) variaveis, sendo elas:
1 - Preço do combustivel;
2 - Consumo médio de combustivel do carro por KM;
3 - Distacia em KM da viagem;
Imprimir no console o valor que será gasto de comvustivel para realizar viagem. 
*/
const precoCombustivel = 5.79;
const KmPorlitros = 6;
const distanciaEmKm = 100;
const litrosConsumidos = distanciaEmKm / KmPorlitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

