import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from './Button';

const HabitForm = (props) => {

    const propsSaveButton = {
        color: 'white',
        padding: '0.7rem 1.5rem',
        border: '2px solid #dd33fa',
        borderRadius: '4px',
        backgroundColor: '#dd33fa',
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '600px' }}>
        <Box>
            <TextField color='secondary' value={props.title} />
        </Box>
        <Box>
            <TextField fullWidth multiline color='secondary' rows={16} value={props.description} />
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Button {...propsSaveButton} />
            <Link to='..'>
                <Button {...propsCancelButton} />
            </Link>
        </Box>
    </Box>
  )
}

export default HabitForm
