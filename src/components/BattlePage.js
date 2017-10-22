import React from 'react';
import { Link } from 'react-router-dom';
import BattlePageComponent from './BattlePageComponent';
import BattlePageLayout from './BattlePageLayout';

export default function IndexPage({
  pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj
}) {
  return (
    <BattlePageLayout>
      <BattlePageComponent
        pokemonObj={pokemonObj}
        onPokemonObj={onPokemonObj}
        defaultPokemonArray={defaultPokemonArray}
      />
    </BattlePageLayout>
  );
}
