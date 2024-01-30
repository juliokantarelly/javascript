let amigo = {nome: 'Lucas',
sexo: 'M',
peso: 70.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(14)
console.log(`O ${amigo.nome} tem ${amigo.peso}Kgs`)