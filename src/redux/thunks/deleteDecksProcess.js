import deleteDecks from '../../api/deleteDecks';

export default function deleteUserDeckProcess(deckId) {
  return (dispatch, getState, env) => {
    return deleteDecks(deckId).then(result => {
      dispatch({ type: 'DELETE_USER_DECK', deckId });
      return result;
    });
  };
}
