import React from 'react';
import BattlePageComponent from './BattlePageComponent';

export default function IndexPage({
  create_Battle,
  createBattleObj,
  defaultPokemonArray,
  getBattleState,
  get_BattleState,
  getTextMessage,
  history,
  location,
  listen_For_Updates,
  listen_For_Message_Update,
  match,
  onPokemonObj,
  pokemonArray,
  setBattleState,
  set_BattleState,
  signOut,
  socket,
  userDecks,
  userSignIn
}) {
  return (
    <BattlePageComponent
      create_Battle={create_Battle}
      createBattleObj={createBattleObj}
      defaultPokemonArray={defaultPokemonArray}
      getBattleState={getBattleState}
      get_BattleState={get_BattleState}
      getTextMessage={getTextMessage}
      history={history}
      location={location}
      listen_For_Updates={listen_For_Updates}
      listen_For_Message_Update={listen_For_Message_Update}
      match={match}
      onPokemonObj={onPokemonObj}
      pokemonArray={pokemonArray}
      setBattleState={setBattleState}
      set_BattleState={set_BattleState}
      signOut={signOut}
      socket={socket}
      userDecks={userDecks}
      userSignIn={userSignIn}
    />
  );
}
