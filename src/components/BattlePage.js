import React from 'react';
import BattlePageComponent from './BattlePageComponent';

export default function IndexPage({
  userDecks,
  createBattleObj,
  socket,
  userSignIn,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  signOut,
  create_Battle,
  history,
  match,
  location
}) {
  return (
    <BattlePageComponent
      create_Battle={create_Battle}
      userDecks={userDecks}
      userSignIn={userSignIn}
      socket={socket}
      signOut={signOut}
      onPokemonObj={onPokemonObj}
      defaultPokemonArray={defaultPokemonArray}
      history={history}
      match={match}
      location={location}
    />
  );
}
