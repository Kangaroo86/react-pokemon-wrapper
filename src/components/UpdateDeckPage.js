import React from 'react';
import UpdateDeckComponent from './UpdateDeckComponent';
//import UpdateDeckPageLayout from './UpdateDeckPageLayout';

export default function IndexPage({
  pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  userDecks,
  get_userDecks,
  delete_decks,
  update_decks,
  get_default_pokemon,
  history,
  match,
  location,
  signOut
}) {
  return (
    <UpdateDeckComponent
      pokemonObj={pokemonObj}
      onPokemonObj={onPokemonObj}
      pokemonArray={pokemonArray}
      defaultPokemonArray={defaultPokemonArray}
      userDecks={userDecks}
      get_userDecks={get_userDecks}
      delete_decks={delete_decks}
      update_decks={update_decks}
      get_default_pokemon={get_default_pokemon}
      history={history}
      match={match}
      location={location}
      signOut={signOut}
    />
  );
}
