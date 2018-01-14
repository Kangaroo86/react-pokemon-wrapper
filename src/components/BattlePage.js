import React from 'react';
import BattlePageComponent from './BattlePageComponent';

export default function IndexPage({
  createBattleObj,
  clear_currentStates_Process,
  delete_Battle_state,
  defaultPokemonArray,
  getBattleState,
  get_battleState,
  history,
  location,
  listen_for_updates,
  //listen_For_Message_Update,
  match,
  messages,
  onPokemonObj,
  pokemonArray,
  setBattleState,
  set_battleState,
  signOut,
  socket,
  userDecks,
  userSignIn,
  update_messages
}) {
  return (
    <BattlePageComponent
      createBattleObj={createBattleObj}
      clear_currentStates_Process={clear_currentStates_Process}
      delete_Battle_state={delete_Battle_state}
      defaultPokemonArray={defaultPokemonArray}
      getBattleState={getBattleState}
      get_battleState={get_battleState}
      history={history}
      location={location}
      listen_for_updates={listen_for_updates}
      //listen_For_Message_Update={listen_For_Message_Update}
      match={match}
      messages={messages}
      onPokemonObj={onPokemonObj}
      pokemonArray={pokemonArray}
      setBattleState={setBattleState}
      set_battleState={set_battleState}
      signOut={signOut}
      socket={socket}
      userDecks={userDecks}
      userSignIn={userSignIn}
      update_messages={update_messages}
    />
  );
}
