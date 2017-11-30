import React from 'react';
import CreateDeckComponent from './CreateDeckComponent';
import IndexPageLayout from './IndexPageLayout';

export default function IndexPage({
  //pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  create_decks,
  userDecks,
  users,
  userSignIn
}) {
  return (
    <IndexPageLayout>
      <CreateDeckComponent
        //pokemonObj={pokemonObj}
        onPokemonObj={onPokemonObj}
        pokemonArray={pokemonArray}
        defaultPokemonArray={defaultPokemonArray}
        create_decks={create_decks}
        userDecks={userDecks}
        users={users}
        userSignIn={userSignIn}
      />
    </IndexPageLayout>
  );
}
