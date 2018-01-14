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
  userSignIn,
  signOut,
  createBattleObj,
  history,
  match,
  create_battle,
  //request_Battle,
  location
}) {
  return (
    <div>
      <HomeComponent
        createBattleObj={createBattleObj}
        //request_Battle={request_Battle}
        create_battle={create_battle}
        userSignIn={userSignIn}
        pokemonObj={pokemonObj}
        onPokemonObj={onPokemonObj}
        defaultPokemonArray={defaultPokemonArray}
        userDecks={userDecks}
        get_userDecks={get_userDecks}
        delete_decks={delete_decks}
        history={history}
        match={match}
        location={location}
        signOut={signOut}
      />
    </div>
  );
}
