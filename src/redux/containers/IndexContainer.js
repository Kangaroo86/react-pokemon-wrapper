import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IndexPage from '../../components/IndexPage';
import SignInProcess from '../thunks/SignInProcess';
import signUpProcess from '../thunks/signUpProcess';
import getRegisteredUsersObjProcess from '../thunks/getRegisteredUsersObjProcess';
//import socketProcess from '../thunks/socketProcess';

function mapStateToProps(state, ownProps) {
  return {
    userSignIn: state.userSignIn,
    errorMessage: state.errorMessage,
    userSignup: state.userSignup,
    users: state.users,
    socket: state.socket
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signIn_user: attribute => {
      dispatch(SignInProcess(attribute));
    },
    user_signup: attribute => {
      dispatch(signUpProcess(attribute));
    },
    get_user: () => dispatch(getRegisteredUsersObjProcess())
    //init_socket: () => dispatch(socketProcess())
  };
}

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_user();
    //this.props.init_socket();
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(IndexPage));
