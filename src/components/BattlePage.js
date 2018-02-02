import React from 'react';
import BattlePageComponent from './BattlePageComponent';

export default function IndexPage({
  createBattleObj,
  create_message,
  create_room,
  clear_rootReducer,
  delete_battleState,
  defaultPokemonArray,
  getBattleState,
  get_battleState,
  history,
  location,
  listen_for_updates,
  match,
  messages,
  onPokemonObj,
  pokemonArray,
  setBattleState,
  set_battleState,
  signOut,
  userDecks,
  userSignIn,
  update_messages
}) {
  return (
    <BattlePageComponent
      createBattleObj={createBattleObj}
      create_message={create_message}
      create_room={create_room}
      clear_rootReducer={clear_rootReducer}
      delete_battleState={delete_battleState}
      defaultPokemonArray={defaultPokemonArray}
      getBattleState={getBattleState}
      get_battleState={get_battleState}
      history={history}
      location={location}
      listen_for_updates={listen_for_updates}
      match={match}
      messages={messages}
      onPokemonObj={onPokemonObj}
      pokemonArray={pokemonArray}
      setBattleState={setBattleState}
      set_battleState={set_battleState}
      signOut={signOut}
      userDecks={userDecks}
      userSignIn={userSignIn}
      update_messages={update_messages}
    />
  );
}
