/**
 *  This is a presentational component. It renders the buttons for the filters and dispatches
 *  an action to set a new filter by using the onClick callback passed in as a prop.
 */

import React from "react";
import PropTypes from "prop-types";

// HINT: Once Redux is connected in the parent FilterLink and the state/dispatch is passed into
// the props of this component, we can remove the default values of these props.
const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </button>
);

// HINT: Once Redux is connected in the parent FilterLink, these lines can be uncommented.
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
