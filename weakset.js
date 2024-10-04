//só aceita objetos

let obj1 = {
    nome: 'Willian',
    age: 26
};

let obj2 ={
    nome: 'Celly',
    age:20
};

let ws = new WeakSet([obj1, obj2]);

//não permite visualização direta temos que ver os itens atraves de .has

console.log(ws.has(obj1));

let obj3 = {
    nome: 'Marcos',
    age: 30
};

ws.add(obj3);
obj3.profession = 'teacher';

console.log(ws.has(obj3));

//não perrmite fazer uma iteração com os values 