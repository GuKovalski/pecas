let pesopeca = 150
let numeropecas = 7
let nomepeca = 'roda'

// Peso das peças
if (pesopeca > 100) {
    console.log('cadastro autorizado')
}

else{
    console.log('cadastro de peso superior a 100g')
}

//Número de peças
if (numeropecas >= 10){
    console.log('número de peças excedido')
}
else{
    console.log('prosseguir cadastro')
}

// Nome da peça
if (numeropecas <= 3) {
    console.log('nome existente, tente novamente')
}
else {
    console.log('nome autorizado')
}