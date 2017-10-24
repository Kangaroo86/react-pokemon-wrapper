import React from 'react';
import CreateDeckComponent from './CreateDeckComponent';
import IndexPageLayout from './IndexPageLayout';

export default function IndexPage({
  pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  create_decks
}) {
  //console.log('defaultPokemonArray from IndexPage : ', defaultPokemonArray);
  return (
    <IndexPageLayout>
      <CreateDeckComponent
        pokemonObj={pokemonObj}
        onPokemonObj={onPokemonObj}
        pokemonArray={pokemonArray}
        defaultPokemonArray={defaultPokemonArray}
        create_decks={create_decks}
      />
    </IndexPageLayout>
  );
}
