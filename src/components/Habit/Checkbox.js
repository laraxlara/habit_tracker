import React from 'react'
import { Box } from '@mui/material'

const Checkbox = ({ children }) => {

  return (
    <Box sx={{ display: 'flex', border: '1px solid #F9D7FF', width: '800px', padding: '2rem', backgroundColor: '#F9D7FF', borderRadius: '10px', marginBottom: '2rem' }}>
      {children}
    </Box>
  )
}

export default Checkbox
