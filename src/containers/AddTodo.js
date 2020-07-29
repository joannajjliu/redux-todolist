/**
 * This is a container component that is responsible for rendering the form to add the todos.
 * It will dispatch the necessary action upon the submission of a new todo.
 */

import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!input.value.trim()) {
      return;
    }

    // HINT: Dispatch an action here to add the new Todo.
    dispatch(actions.addTodo(input.value));
    input.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// HINT: Connect this component to Redux using connect()
export default connect()(AddTodo);
