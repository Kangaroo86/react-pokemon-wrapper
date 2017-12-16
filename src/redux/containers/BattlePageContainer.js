import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import BattlePage from '../../components/BattlePage';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import createMessageProcess from '../thunks/createMessageProcess'; //wip
import createBattleProcess from '../thunks/createBattleProcess'; //wip

function mapStateToProps(state, ownProps) {
  return {
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks,
    userSignIn: state.userSignIn,
    socket: state.socket,
    createBattleObj: state.createBattleObj
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
    create_Battle: () => dispatch(createBattleProcess()) //wip
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks();
  }
});

export default compose(connectToStore, withlifecycle)(BattlePage);
