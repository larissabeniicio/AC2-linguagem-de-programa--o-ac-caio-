let numeros = [2, 5, 8, 16, 21,];
let novosnumeros = [];
function gerarnumeroAleatorio(){
    return Math.floor(math.random()*10) + 1; //math.random(), ele serve para gerar um numero decimal
    //entre 0 e 1 um é inclusivo e o outro exclusivo
    //math.floor//ele vai gerar um número de 1 a 10
    // math.floor ele serve para arredondar numeros que usam numeros interios 
    // como por exemplo gerar numeros aleatorios ou manipular arrays 
}
numeros.forEach(function(numeroAtual){
    //verifica se o numero é impar
    if (numeroAtual % 2 ===0){
        numeroAtual= numeroatual *gerarnumeroaleatorio();

    }
novosnumeros.push(numeroAtual);
//ele adiciona o numero mudado ou nao ao novo array 
});
console.log(novos numeros);
//ele exibe o novo array  