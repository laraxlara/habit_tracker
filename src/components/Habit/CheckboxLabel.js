import React from 'react'
import TextField from '@mui/material/TextField';

const CheckboxLabel = ({ children }) => {
  return (
    <TextField disabled fullWidth variant="standard" color="secondary">{children}</TextField>
  )
}

export default CheckboxLabel
