import React from 'react';
import useTodoState from './hooks/useTodoState';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function TodoApp() {
  const initialTodos = [{id: 1, task: "Grocery shopping", completed: false }];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);



  return (
    <div>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography>TODOS WITH HOOKS</Typography>
        </Toolbar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList editTodo={editTodo} removeTodo={removeTodo} todos={todos} toggleTodo={toggleTodo} />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  )
}

export default TodoApp;
