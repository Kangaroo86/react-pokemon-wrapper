import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUpPage from '../../components/SignUpPage';
import signUpProcess from '../thunks/signUpProcess';
import getUsersProcess from '../thunks/getUsersProcess';

function mapStateToProps(state, ownProps) {
  return {
    userSignup: state.userSignup,
    users: state.users
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    user_signup: attribute => {
      dispatch(signUpProcess(attribute));
    },
    get_user: () => dispatch(getUsersProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_user();
  }
});

export default compose(connectToStore, withlifecycle)(withRouter(SignUpPage));
