import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({
  pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  userDecks,
  get_userDecks,
  delete_decks,
  update_Decks,
  get_default_pokemon
}) {
  return (
    <div>
      <SignInComponent>
        pokemonObj={pokemonObj}
        onPokemonObj={onPokemonObj}
        pokemonArray={pokemonArray}
        defaultPokemonArray={defaultPokemonArray}
        userDecks={userDecks}
        get_userDecks={get_userDecks}
        delete_decks={delete_decks}
        update_Decks={update_Decks}
        get_default_pokemon={get_default_pokemon}
      </SignInComponent>
    </div>
  );
}
