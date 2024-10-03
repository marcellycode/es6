let obj = {
  name: "ana",
  age: 26,
};

let proxy = new Proxy(obj, {
  get(target, name) {
    console.log("alguém está pedindo o nome");
    return target[name];
  },

  set(target, name, value) {
    console.log("Alguém está mudando o nome");
    target[name] = value.toUpperCase();
   
  },
});

console.log(proxy.name);
console.log(proxy.name);
proxy.name = 'maria';
console.log(proxy.name);