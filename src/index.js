// Libs
import React from "react";
import { render } from "react-dom";

// Redux
import rootReducer from "./reducers";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";

// Components
import App from "./components/App";

// HINT: Create the initial state of the application here by invoking the reducers.
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// HINT: Pass the store into the App using react-redux's Provider component
render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
