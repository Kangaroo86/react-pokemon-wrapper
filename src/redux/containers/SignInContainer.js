import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import SignInPage from '../../components/SignInPage';
import getUserProcess from '../thunks/getUserProcess';

function mapStateToProps(state, ownProps) {
  return {
    userLogin: state.userLogin
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_user: attribute => {
      dispatch(getUserProcess(attribute));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {}
});

export default compose(connectToStore, withlifecycle)(SignInPage);
