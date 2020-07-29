import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    // HINT: Add all the cases for the different actions here.
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
