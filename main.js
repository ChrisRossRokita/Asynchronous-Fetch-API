// fetch API

fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
    console.log('resolved', response);
    response.json();
}).catch((err) => {
    console.log('rejected', err);
});