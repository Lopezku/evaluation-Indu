/* eslint linebreak-style: ["error", "windows"] */
import { fetchPokemon } from './api/fetchPokemon.mjs';
import { fetchPokemonAbilities } from './api/fetchPokemonHabilites.mjs';
window.addEventListener('DOMContentLoaded', () => {
  const pokeP = document.getElementById('pokeInfo');
  const pokeDiv = document.getElementById('pokemon-info');
  const pokeAbilityBtn = document.getElementById('ability');

  const pokeInfo = {};
  const callFetchPokemon = async () => {
    const pokemon = await fetchPokemon();
    if (pokemon) {
      pokeInfo.name = `${String(pokemon.species.name)
        .slice(0, 1)
        .toUpperCase()}${String(pokemon.species.name)
        .slice(1, pokemon.species.name.length)
        .toLowerCase()}`;
    }
    if (pokeP.innerText !== '') {
      pokeP.innerText = '';
    }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute('disabled');
  };

  const callFetchPokemonAbilities = async () => {
    const ability = await fetchPokemonAbilities();
    const pokeAbility = document.getElementById('pokeAbility');
    let abilityToDisplay = '';
    if (ability) {
      abilityToDisplay = `${String(ability.name)
        .slice(0, 1)
        .toUpperCase()}${String(ability.name)
        .slice(1, ability.name.length)
        .toLowerCase()}`;
    }
    if (pokeAbility.innerText !== '') {
      pokeAbility.innerText = '';
    }

    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
  };

  /**
   * Création du bouton pour ajouter le nom d'un Pokemon au DOM
   *
   */
  const invoquePokemon = () => {
    const pokeBtn = document.getElementById('pokemon');
    pokeBtn.addEventListener('click', callFetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Création d'un bouton pour ajouter le nom d'une habilité au DOM
   *
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', callFetchPokemonAbilities);
    pokeDiv.appendChild(pokeAbility);
  };
  /**
   * Initialise les boutons dans une IIFE dans le DOM
   *
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});
