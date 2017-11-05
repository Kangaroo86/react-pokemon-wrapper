import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUpPage from '../../components/SignUpPage';
import signUpProcess from '../thunks/signUpProcess';

function mapStateToProps(state, ownProps) {
  return {
    userSignup: state.userSignup
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    user_signup: attribute => {
      dispatch(signUpProcess(attribute));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {}
});

export default compose(connectToStore, withlifecycle)(withRouter(SignUpPage));
