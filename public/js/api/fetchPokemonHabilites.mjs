"use strict";
/**
 * @function
 * @name fetchPokemonAbilities
 * Cette fonction récupère une habilité au hasard (chiffre entre 0 et 266)
 * Cette function return un fichier json avec les habilités des Pokemon
 * @returns {Promise} Promise object represents a json file
 */
/* eslint linebreak-style: ["error", "windows"] */
export const fetchPokemonAbilities = async () => {
  /**
   * @type {number}
   * ${pokedexNum} Génère un id de pokemon aléatoirement entre 0 et 266
   */
  const pokedexNum = Math.floor(Math.random() * 266);
  let foundAbilities = "";
  try {
    foundAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error.message);
    return error;
  }
  const pokemonAbilities = await foundAbilities.json();
  return pokemonAbilities;
};
