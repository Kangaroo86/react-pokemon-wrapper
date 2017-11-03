import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUpPage from '../../components/SignUpPage';
import getUserProcess from '../thunks/getUserProcess';

function mapStateToProps(state, ownProps) {
  return {
    userSignup: state.userSignup
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

export default compose(connectToStore, withlifecycle)(withRouter(SignUpPage));
