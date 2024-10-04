const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5,
}

console.log(`Total de animais: `, Object.values(animals).reduce((a,b)=> a+b));

