import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';

const HabitForm = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '600px' }}>
        <Box>
            <TextField label="Title" color='secondary' />
        </Box>
        <Box>
            <TextField label="Description" fullWidth multiline color='secondary' rows={16} />
        </Box>
    </Box>
  )
}

export default HabitForm
