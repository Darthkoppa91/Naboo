import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Checkbox from '@mui/material/Checkbox';

export default function MediaCard ( {todo, index, handleDelete} ) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1585669060258-2dc6a3976d09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="little stormtropper"
      />
      <CardContent>
        
      </CardContent>
      <CardActions>
        <Button color="error" variant= "contained" size="small" onClick={() => handleDelete(index)} startIcon={<DeleteIcon />} >Delete</Button>
      
      </CardActions>
    </Card>
  );
}