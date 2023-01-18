import React from 'react'
import Checkbox from '@mui/material/Checkbox';

const CheckboxInput = (props) => {
  return (
    <>
      <Checkbox checked={props.checked} color="secondary" />
    </>
  )
}

export default CheckboxInput
