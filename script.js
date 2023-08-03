(async function() {

const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);

const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")

const data = await response.json()

const pokemons = data.pokemon_species.slice(0, 20)
console.log(pokemons)

const context = { pokemons };
const html = template(context);

document.querySelector("body").innerHTML = html

})()

// MENI OVO NE RADI KAO MATEJU

// Stranica: robohash.org, dosta zanimljiv API