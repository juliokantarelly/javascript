let comida = ['pizza', 'arroz', 'pirulito', 'doce', 'leite']
comida.sort()

/*for (let pos = 0; pos < comida.length; pos++){
    console.log(`A posição ${pos} possui o valor ${comida[pos]}`)
}*/

for (let pos in comida){
    console.log(`A posição ${pos} possui valor ${comida[pos]}`)
}
