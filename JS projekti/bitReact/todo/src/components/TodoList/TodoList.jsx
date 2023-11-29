import React, { useState } from "react";
import "./todoList.css";
import TodoItem from "../TodoItem/TodoItem";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [check, setChecked] = useState(false);


  const handleAdding = (todo) => {
    if (inputValue) {
      const obj = {
        task: todo,
        completed: false

      }

      setTodos((prevTodos) => [...prevTodos, obj]);
    }
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
   newTodos.splice(index, 1);
    setTodos(newTodos);
  };
console.log(todos)
  return (
    <div className="todoList-div">
      
      <div>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="To Do List" color="primary" focused onChange={(event) => setInputValue(event.target.value)}
          value={inputValue} />
          <Button color="primary" variant= "outlined" size="small" onClick={() => handleAdding(inputValue)} endIcon={<SendIcon />} 
        >ADD</Button>
      </Box>
      
        
      </div>

      {todos.map((todoObj, index) => {
        return (
          <TodoItem
            todo={todoObj.task}
            key={crypto.randomUUID()}
            index={index}
            handleDelete={handleDelete}
            check = {check}
            setChecked = {setChecked}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
