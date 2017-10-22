import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import RenderAllDecksPage from '../../components/RenderAllDecksPage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';

function mapStateToProps(state, ownProps) {
  console.log('render container-----', state.userDecks);
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_userDecks: () => dispatch(getUserDecksProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {}
});

export default compose(connectToStore, withlifecycle)(RenderAllDecksPage);
