import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form style={{ marginLeft: "1rem", width: "50%"}} onSubmit={(e) => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();
    }}>
      <TextField autoFocus margin="normal" value={value} onChange={handleChange} fullWidth />
    </form>
  )
}

export default EditTodoForm;
