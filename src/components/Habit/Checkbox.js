import React from 'react'
import { Box } from '@mui/material'

const Checkbox = ({ children }) => {

  return (
    <Box sx={{ display: 'flex', border: '1px solid #FFADBC', width: '800px', padding: '2rem', backgroundColor: '#FFADBC', borderRadius: '10px', marginBottom: '2rem' }}>
      {children}
    </Box>
  )
}

export default Checkbox
