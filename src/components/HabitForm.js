import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from './Button';

const HabitForm = (props) => {

    const propsSaveButton = {
        color: 'white',
        padding: '0.7rem 1.5rem',
        border: '2px solid #FFADBC',
        borderRadius: '4px',
        backgroundColor: '#FFADBC',
        text: 'SAVE'
    }

    const propsCancelButton = {
        color: '#73777B',
        padding: '0.7rem 1.5rem',
        border: '2px solid #73777B',
        borderRadius: '4px',
        backgroundColor: 'white',
        text: 'CANCEL'
    }

  return (
    <form onSubmit={props.onSubmit}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '600px' }}>
        <Box>
            <TextField name='title' color='secondary' value={props.title} onChange={props.onChange} />
        </Box>
        <Box>
            <TextField name='description' fullWidth multiline color='secondary' rows={16} value={props.description} onChange={props.onChange} />
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button onClick={props.onClick}>SAVE</button>
            <Link to='..'>
                <Button {...propsCancelButton} />
            </Link>
        </Box>
    </Box>
    </form>
  )
}

export default HabitForm
