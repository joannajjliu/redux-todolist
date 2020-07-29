/**
 *  This is a presentational component. It renders all the todos based on the active filters. It uses another child
 *  presentational component Todo to contain each todo. Each todo can be toggled by using the toggleTodo callback passed
 *  as a prop.
 */

import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

// HINT: Once Redux is connected in the parent VisibleTodoList and the state/dispatch is passed into
// the props of this component, we can remove the default values of these props.
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

// HINT: Once Redux is connected in the parent VisibleTodoList, these lines can be uncommented.
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
