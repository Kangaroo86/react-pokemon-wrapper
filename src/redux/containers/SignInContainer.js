import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import SignInPage from '../../components/SignInPage';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {}
});

export default compose(connectToStore, withlifecycle)(SignInPage);
