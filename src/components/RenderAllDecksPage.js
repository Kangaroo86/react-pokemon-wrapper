import React from 'react';
import RenderAllDecksComponent from './RenderAllDecksComponent';
import RenderAllDecksPageLayout from './RenderAllDecksPageLayout';

export default function IndexPage({
  pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj
}) {
  return (
    <RenderAllDecksPageLayout>
      <RenderAllDecksComponent
        pokemonObj={pokemonObj}
        onPokemonObj={onPokemonObj}
        defaultPokemonArray={defaultPokemonArray}
      />
    </RenderAllDecksPageLayout>
  );
}
