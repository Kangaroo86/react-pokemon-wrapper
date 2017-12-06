import React from 'react';
import HomeComponent from './HomeComponent';

export default function SignInPage({
  pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  userDecks,
  get_userDecks,
  delete_decks,
  update_Decks,
  signOut,
  history,
  match,
  location
}) {
  return (
    <div>
      <HomeComponent
        pokemonObj={pokemonObj}
        onPokemonObj={onPokemonObj}
        defaultPokemonArray={defaultPokemonArray}
        userDecks={userDecks}
        get_userDecks={get_userDecks}
        delete_decks={delete_decks}
        update_Decks={update_Decks}
        history={history}
        match={match}
        location={location}
        signOut={signOut}
      />
    </div>
  );
}
