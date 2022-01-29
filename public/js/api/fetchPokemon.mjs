"use strict";
/**
 * @function
 * @name fetchPokemon
 * Cette fonction récupère une habilité au hasard (chiffre entre 0 et 897)
 * Return un fichier json avec les objets Pokemon
 * @returns {Promise} Promise object represents a json file
 */
/* eslint linebreak-style: ["error", "windows"] */
export const fetchPokemon = async () => {
  /**
   * @type {number}
   *  ${pokedexNum} Génère un id de pokemon aléatoirement entre 0 et 897
   */
  const pokedexNum = Math.floor(Math.random() * 897);
  let foundPokemon = "";
  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error.message);
    return error;
  }
  const pokemon = await foundPokemon.json();
  return pokemon;
};
