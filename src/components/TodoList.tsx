import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import { toggleTodo, removeTodo } from '../redux/actions/actionCreators/todoActionCreator';
import * as todoActions from '../redux/actions/actionCreators/todoActionCreator'

const TodoList = (props) => {
  // const { todos, toggleTodo, removeTodo} = props;
  const { todos, todoActions} = props;
  console.log(props);
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {/* <span onClick={() => toggleTodo(index)}>{todo.text}</span>
          <button onClick={() => removeTodo(index)}>Delete</button> */}
          <span onClick={() => todoActions.toggleTodo(index)}>{todo.text}</span>
          <button onClick={() => todoActions.removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

// Approach 1

// const mapDispatchToProps = {
//   toggleTodo,
//   removeTodo,
// };



// Approach 2; useful if we want to bind multiple action creators to the component

const mapDispatchToProps = (dispatch) => {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
