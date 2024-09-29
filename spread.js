let front = ['react', 'vue', 'angular'];
let back = ['python', 'ruby', 'node.js'];

let fullstack = [...front, 'RxJS', ...back]
console.log(fullstack)

// console.log([...'will'])
// console.log(...front)
console.log('------------------')

function makeSandwich(bread, cheese, sauce){
    console.log(`Your sandwich with ${bread} bread, ${cheese} chesse and ${sauce} is done!`)
}

const ingredients = ['white', 'cheddar', 'barbecue']

makeSandwich(...ingredients)