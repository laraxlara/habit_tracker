import React from 'react'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const Checkbox = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', border: '1px solid #F9D7FF', width: '800px', padding: '2rem', backgroundColor: '#F9D7FF', borderRadius: '10px', marginBottom: '2rem' }}>
      {children}
      <IconButton color="secondary" aria-label="edit">
        <CreateIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

export default Checkbox
