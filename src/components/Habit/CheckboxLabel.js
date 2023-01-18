import React from 'react'
import TextField from '@mui/material/TextField';

const CheckboxLabel = (props) => {
  return (
    <TextField fullWidth variant="standard" color="secondary" value={props.value} />
  )
}

export default CheckboxLabel
