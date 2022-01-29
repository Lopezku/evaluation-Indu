/**
   * Funtion asynchrone qui prend un nombre alétoire un json correspondant
   * à l'id du Pokemon
   * La fonction assigne le nom de Pokemon, active le bouton pokeAbility

   */
/**
 *  ${pokedexNum} Génère un id de pokemon aléatoirement entre0 et 897
 * @type {number}
 */
/* eslint linebreak-style: ["error", "windows"] */
export const fetchPokemon = async () => {
  const pokedexNum = Math.floor(Math.random() * 897);
  let foundPokemon = '';
  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error.message);
    return error;
  }
  const pokemon = await foundPokemon.json();
  return pokemon;
};
