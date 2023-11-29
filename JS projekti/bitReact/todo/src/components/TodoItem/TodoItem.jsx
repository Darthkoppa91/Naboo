import React, { useState } from "react";
import "./todoItem.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import MediaCard from "../Media Card/MediaCard";
import { Checkbox } from "@mui/material";

const TodoItem = ({ todo, index, handleDelete }) => {
  const [check, setChecked]= useState(false)
  return (
    <div className="todoItem-div">
      <Checkbox value={check} onChange={()=>{
        setChecked(!check)
      }
        } />
      <MediaCard todo ={todo} index ={index} handleDelete={handleDelete} />
      
      
    </div>
  );
};

export default TodoItem;
