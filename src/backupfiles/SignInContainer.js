import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInPage from '../../components/SignInPage';
import SignInProcess from '../thunks/SignInProcess';

function mapStateToProps(state, ownProps) {
  return {
    userSignIn: state.userSignIn,
    errorMessage: state.errorMessage
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signIn_user: attribute => {
      dispatch(SignInProcess(attribute));
    }
  };
}

const withlifecycle = lifecycle({
  componentDidMount() {}
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.userSignIn.token) {
  //     this.props.history.push(`/decks/render`);
  //   }
  //   if (window.localStorage.getItem('userId')) {
  //     this.props.history.push(`/decks/render`);
  //   }
  // }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(SignInPage));
