import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import BattlePage from '../../components/BattlePage';

import createMessageProcess from '../thunks/createMessageProcess'; //wip
import createBattleProcess from '../thunks/createBattleProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getBattleStateProcess from '../thunks/getBattleStateProcess';
import setBattleStateProcess from '../thunks/setBattleStateProcess';

function mapStateToProps(state, ownProps) {
  console.log('getBattleState FROM Container-------', state.getBattleState);
  return {
    createBattleObj: state.createBattleObj,
    defaultPokemonArray: state.defaultPokemonArray,
    getBattleState: state.getBattleState,
    pokemonArray: state.pokemonArray,
    userSignIn: state.userSignIn,
    userDecks: state.userDecks,
    setBattleState: state.setBattleState,
    socket: state.socket
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPokemonObj: pokemonId => {
      dispatch(getPokemonObjProcess(pokemonId));
    },
    signOut: () => dispatch({ type: 'USER_SIGNIN', userSignIn: null }),
    get_userDecks: () => dispatch(getUserDecksProcess()),
    create_Message: () => dispatch(createMessageProcess()), //wip
    create_Battle: userId => dispatch(createBattleProcess()),
    get_BattleState: () => dispatch(getBattleStateProcess()),
    set_BattleState: stateObj => dispatch(setBattleStateProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks();
    //this.props.get_BattleState();
  }
});

export default compose(connectToStore, withlifecycle)(BattlePage);
