import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInPage from '../../components/SignInPage';
import SignInProcess from '../thunks/SignInProcess';
import getUsersProcess from '../thunks/getUsersProcess';

function mapStateToProps(state, ownProps) {
  console.log('sigin container----', state.errorUserSignIn);
  return {
    userSignup: state.userSignup, //delete
    users: state.users,
    userSignIn: state.userSignIn,
    errorUserSignIn: state.errorUserSignIn
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signIn_user: attribute => {
      dispatch(SignInProcess(attribute));
    },
    get_user: () => dispatch(getUsersProcess())
  };
}

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_user();
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userSignIn.token) {
      this.props.history.push(`/`);
    }
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(SignInPage));
