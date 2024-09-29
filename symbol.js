// 1. Criação de um símbolo chamado 'id', que será uma propriedade única.
const id = Symbol('id');

// 2. Função construtora Produto para criar novos produtos
const Produto = function(nome) {
  this.nome = nome; // Definimos o nome do produto normalmente.

  // 3. Criamos um 'id' único usando o símbolo. O valor é um número aleatório.
  this[id] = Math.floor(Math.random() * 100);

  // 4. Método para acessar o id "privado"
  this.getId = function() {
    return this[id]; // Retorna o id armazenado.
  };
};

// 5. Criamos um novo produto chamado 'Celular'
const produto1 = new Produto("Celular");
const produto2 = new Produto ('Tablet');

// 6. Para acessar o id, usamos o método getId
console.log(produto1.getId()); // Exibe o id do produto
console.log(produto2.getId()); 