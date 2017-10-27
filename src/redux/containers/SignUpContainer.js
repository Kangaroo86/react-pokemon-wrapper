import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import SignUpPage from '../../components/SignUpPage';

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

export default compose(connectToStore, withlifecycle)(SignUpPage);
