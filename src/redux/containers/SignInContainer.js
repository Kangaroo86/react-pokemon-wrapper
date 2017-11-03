import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInPage from '../../components/SignInPage';
import SignInProcess from '../thunks/SignInProcess';

function mapStateToProps(state, ownProps) {
  return {
    userSignIn: state.userSignIn
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signIn_user: attribute => {
      dispatch(SignInProcess(attribute));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {}
});

export default compose(connectToStore, withlifecycle)(withRouter(SignInPage));
