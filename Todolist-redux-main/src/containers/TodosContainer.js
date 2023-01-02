import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';


const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));

 const dispatch = useDispatch();
 const onChangeInput = input => dispatch(changeInput(input));
 const onInsert = text => dispatch((insert(text)));
 const onToggle = id => dispatch(toggle(id));
 const onRemove = id => dispatch(remove(id));
 
   return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
