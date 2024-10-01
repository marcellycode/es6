function ajax (url){
    fetch(url)
        .then(data => data.json())
        .then(data => console.log(data))
}

function* ajaxGen(){
    console.log('Buscando posts...');
    const post1 = yield ajax('https://jsonplaceholder.typicode.com/posts/1');
    console.log(post1);

    console.log('Buscando posts...');
    const post2 = yield ajax('https://jsonplaceholder.typicode.com/posts/2');
    console.log(post2);
}

const dados = ajaxGen();
dados.next();