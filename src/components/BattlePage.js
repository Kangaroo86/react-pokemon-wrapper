import React from 'react';
import BattlePageComponent from './BattlePageComponent';

export default function IndexPage({
  pokemonObj,
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
      signOut={signOut}
      pokemonObj={pokemonObj}
      onPokemonObj={onPokemonObj}
      defaultPokemonArray={defaultPokemonArray}
      history={history}
      match={match}
      location={location}
    />
  );
}
