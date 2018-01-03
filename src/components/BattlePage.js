import React from 'react';
import BattlePageComponent from './BattlePageComponent';

export default function IndexPage({
  create_Battle,
  createBattleObj,
  delete_Battle_state,
  defaultPokemonArray,
  getBattleState,
  get_BattleState,
  get_All_Messages,
  history,
  location,
  listen_For_Updates,
  listen_For_Message_Update,
  match,
  messages,
  onPokemonObj,
  pokemonArray,
  setBattleState,
  set_BattleState,
  signOut,
  socket,
  userDecks,
  userSignIn,
  updateMessagesProcess
}) {
  return (
    <BattlePageComponent
      create_Battle={create_Battle}
      createBattleObj={createBattleObj}
      delete_Battle_state={delete_Battle_state}
      defaultPokemonArray={defaultPokemonArray}
      getBattleState={getBattleState}
      get_BattleState={get_BattleState}
      get_All_Messages={get_All_Messages}
      history={history}
      location={location}
      listen_For_Updates={listen_For_Updates}
      listen_For_Message_Update={listen_For_Message_Update}
      match={match}
      messages={messages}
      onPokemonObj={onPokemonObj}
      pokemonArray={pokemonArray}
      setBattleState={setBattleState}
      set_BattleState={set_BattleState}
      signOut={signOut}
      socket={socket}
      userDecks={userDecks}
      userSignIn={userSignIn}
      updateMessagesProcess={updateMessagesProcess}
    />
  );
}
