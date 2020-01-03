import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch  = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form style={{ marginLeft: "1rem", width: "50%"}} onSubmit={(e) => {
      e.preventDefault();
      dispatch({type: "EDIT", id: id, newTask: value});
      reset();
      toggleEditForm();
    }}>
      <TextField autoFocus margin="normal" value={value} onChange={handleChange} fullWidth />
    </form>
  )
}

export default EditTodoForm;
