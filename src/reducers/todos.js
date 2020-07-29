const todos = (state = [], action) => {
  switch (action.type) {
    // HINT: Add all the cases for the different actions here.
    case "ADD_TODO":
      return [...state, { text: action.text, id: action.id, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
