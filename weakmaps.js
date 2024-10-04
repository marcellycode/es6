 //definições fracas 

 let obj1 = {
    name: 'Ana',
    age: 26
 };

 let obj2 = {
    name:'Jonas',
    age: 25
 };

 let wm  = new WeakMap();

 wm.set(obj1, 'Info do Willian');
 wm.set(obj2, 'info da Ana');

console.log(wm.has(obj1))