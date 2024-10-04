let m = new Map();

m.set('Willian', 26);
m.set('Jonas', 22);
m.set('Ana', 20)

console.log(m.size)

//usando iterator 
const it = m.values()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
