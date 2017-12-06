import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IndexPage from '../../components/IndexPage';
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
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(IndexPage));
