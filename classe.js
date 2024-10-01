class Pessoa {
    constructor (nome, idade){
        this.nome=nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }

}

const Eu = new Pessoa ('Marcelly', '20');
console.log(Eu.apresentar());