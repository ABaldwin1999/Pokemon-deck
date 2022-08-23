import { pokemonArray } from "./data/pokemon.js";

const getCard = (poke) => {
  return `<div class="card">
    <img class="card_image" src="${poke.sprite}" alt=""></img>
    <h1 class="card_title">${poke.name}</h1>
    <div class="card_content">
      <p card_text>${poke.name} is a ${poke.types.join("&")} type Pokemon</p>
    </div>
  </div>`;
};

const container = document.querySelector(".card-container");
pokemonArray.forEach((poke) => {container.innerHTML += getCard(poke);});

const typeFinder = document.querySelector(".typeFinder");

