import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/system'
import Checkbox from './Checkbox'
import CheckboxInput from './CheckboxInput'
import CheckboxLabel from './CheckboxLabel'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const Habit = (props) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Checkbox>
            <CheckboxInput {...props} />
            <CheckboxLabel {...props} />
            <Link to={props.link}>
              <IconButton color="secondary" aria-label="edit">
                <CreateIcon />
              </IconButton>
            </Link>
            <IconButton aria-label="delete" onClick={props.onClick}>
              <DeleteIcon />
            </IconButton>
        </Checkbox>
    </Container>
  )
}

export default Habit
