import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInPage from '../../components/SignInPage';
import SignInProcess from '../thunks/SignInProcess';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signIn_user: attribute => {
      dispatch(SignInProcess(attribute));
    }
  };
}

const connectToStore = connect(null, mapDispatchToProps);

export default compose(connectToStore)(withRouter(SignInPage));
