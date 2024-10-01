//iteravel:
var txt = 'Ireland';
//metodo que retorna um iterador: 
var it = txt [Symbol.iterator]();

//console.log(it.next());

for (letter of txt){
    console.log(letter);
    if (letter==='a') break
;}