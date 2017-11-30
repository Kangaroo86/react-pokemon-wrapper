import React from 'react';
import CreateDeckComponent from './CreateDeckComponent';
import CreateDeckPageLayout from './CreateDeckPageLayout';

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
    <CreateDeckPageLayout>
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
    </CreateDeckPageLayout>
  );
}
