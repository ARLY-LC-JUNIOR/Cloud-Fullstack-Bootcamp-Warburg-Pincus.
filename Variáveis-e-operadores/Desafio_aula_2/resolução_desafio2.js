//Fazer um programa para calcular o valor do gasto de combustivel em viagem.

//Será disponibilizado 3(tres) variaveis, sendo elas:
//1 - Preço do combustivel Etanol;
//2 - Preço da combustivel gasolina;
//3 - O tipo de combustivel que está no carro;
//4 - Gasto médiod e combustivel
//Distancia em KM da viagem;
//Imprimir no console o valor que será gasto de comvustivel para realizar viagem.
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorlitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / KmPorlitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
