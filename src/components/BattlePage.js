import React from 'react';
import BattlePageComponent from './BattlePageComponent';

export default function IndexPage({
  userDecks,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  signOut,
  history,
  match,
  location
}) {
  return (
    <BattlePageComponent
      userDecks={userDecks}
      signOut={signOut}
      onPokemonObj={onPokemonObj}
      defaultPokemonArray={defaultPokemonArray}
      history={history}
      match={match}
      location={location}
    />
  );
}
