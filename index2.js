import{poketarjeta}from './pokedexV2.js';

window.onload = async() => {
    await getPokemones(20, 0);
}

var lospokemones = [];
var pokemones = [];

const getPokemones = async(l, o) => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit='+l+'&offset='+o;
    let tabla = '';
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        pokemones = data.results;
        lospokemones = pokemones;
        verPokemones(lospokemones);
    }
}

const verPokemones = (pokemones) =>{
    document.querySelector('#info').innerHTML = ' ';
    pokemones.forEach(async (pok,) => {
            const tarjeta = new poketarjeta(pok.name, pok.url, 3);
            let card = await tarjeta.mostrar();
            document.querySelector('#info').innerHTML += card;
        });
}

const buscar = () =>{
    var input = document.querySelector('#buscar').value;
    let x = lospokemones.filter(pokemon => pokemon.name.includes(input));
    verPokemones(x);
}

var boton = document.querySelector('#btnBuscar');
boton.addEventListener('click', buscar);