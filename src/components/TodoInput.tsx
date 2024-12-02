import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/actionCreators/todoActionCreator';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (text.trim()) {
      // dispatch(addTodo(text)); // using dispatch directly via useDispatch hook
      addTodo(text);  // behind the scene this will call dispatch(addTodo(text))
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a TODO"
      />
      <button onClick={handleAddTodo}>Add TODO</button>
    </div>
  );
};

const mapDispatchToProps = { // if returned as an object, each property will be assumed to be an action creator.
  addTodo, // this will be passed as props to the component.
};

export default connect(null, mapDispatchToProps)(TodoInput);
