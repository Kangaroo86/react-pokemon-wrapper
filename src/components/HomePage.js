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
  update_Decks,
  userSignIn,
  signOut,
  createBattleObj,
  history,
  match,
  socket,
  socketID, //wip, currently not using
  create_Battle,
  request_Battle,
  connectedPlayers,
  location
}) {
  return (
    <div>
      <HomeComponent
        createBattleObj={createBattleObj}
        request_Battle={request_Battle}
        create_Battle={create_Battle}
        connectedPlayers={connectedPlayers}
        userSignIn={userSignIn}
        socket={socket}
        socketID={socketID}
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
        signOut={signOut}
      />
    </div>
  );
}
