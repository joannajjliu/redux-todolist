/**
 *  This is a container component that wraps the presentational Link component.
 *  It connects to the Redux store, extracts the state and determines which filter is currently active.
 *  It also passes down a method to Link that will allow it to set an active filter upon
 *  click (by dispatching the right action).
 */

import Link from "../components/Link";

import { connect } from "react-redux";
import * as actions from "../actions";
// HINT: Add the mapStateToProps and mapDispatchToProps methods here.

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(actions.setVisibilityFilter(ownProps.filter)),
});

// HINT: Connect this component to Redux using connect()
export default connect(mapStateToProps, mapDispatchToProps)(Link);
