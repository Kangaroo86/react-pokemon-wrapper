import React from 'react';
import RenderAllDecksComponent from './RenderAllDecksComponent';
import RenderAllDecksPageLayout from './RenderAllDecksPageLayout';

export default function IndexPage({
  pokemonObj,
  pokemonArray,
  defaultPokemonArray,
  onPokemonObj,
  userDecks,
  get_userDecks,
  delete_decks,
  update_Decks,
  history,
  match,
  location
}) {
  //console.log('called from components', location, history, match);
  return (
    <RenderAllDecksPageLayout>
      <RenderAllDecksComponent
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
      />
    </RenderAllDecksPageLayout>
  );
}
