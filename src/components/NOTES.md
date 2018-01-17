
:::Initial render:::
  Front_END
  A. BattlePageContainer calls get_battleState()
      i.    get_battleState() makes an API call to get the battleState
      ii.   socket.emit('STATE_UPDATED'), emit to B/E to be updated
      iii.  dispatch({ type: 'GET_BATTLE_STATE', getBattleState: battleState });

  Back_END
  B. socket.on('STATE_UPDATED'): Received F/E obj and updated the the database
      i.  setBattleState(stateObj) makes the updates to the database, then emit it back to the F/E
      ii. socket.emit('UPDATED_BATTLE_STATE') emit to the F/E to be Stored in the Redux Store

  Front_END
  C. BattleComponent listen for the updates from the B/E
      i. socket.on('UPDATED_BATTLE_STATE') listens for the updates and make a thunk call; listen_for_updates(obj)
      ii. listen_for_updates(obj)'s purpose is ONLY to dispatch the updates to the Redux store; dispatch({type: 'GET_BATTLE_STATE', getBattleState: obj});

  //Bug(s):
    1. When player_2 joins the battle room and go through the Initial render cycle(above), and this cause the Redux store to be updated. In theory Player_1 should get a re-render since Player_2 just updated the Redux store


Cycle
  F/E [ BattlePageContainer emit the inital battleState ] ----->
  B/E [ socket.on('STATE_UPDATED') receives the obj and make updates to the database ] ----->
  B/E [ socket.emit('UPDATED_BATTLE_STATE') emits the updated to the F/E to be stored in Redux Store ] ----->
  F/E [ socket.on('UPDATED_BATTLE_STATE')] dispatch the updated obj to the Redux Store ]
