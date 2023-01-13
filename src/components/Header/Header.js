import React from 'react'
import { Container, Box } from '@mui/material';
import Button from '../Button';

import '../../styles/Header.css'

const Header = () => {

  const propsNewButton = {
    color: 'white',
    margin: '0 2rem',
    padding: '1rem 2rem',
    border: '2px solid #dd33fa',
    borderRadius: '4px',
    backgroundColor: '#dd33fa',
    text: 'NEW'
  }

  const propsSignOutButton = {
    color: '#dd33fa',
    margin: '0',
    padding: '1rem',
    border: '2px solid #dd33fa',
    borderRadius: '4px',
    backgroundColor: 'white',
    text: 'SIGN OUT'
  }

  return (
    <header>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }} maxWidth='xl'>
        <h1>Habit Tracker</h1>
        <Box sx={{ display: 'flex' }}>
          <Button {...propsNewButton}  />
          <Button {...propsSignOutButton} />
        </Box>
      </Container>
    </header>
  )
}

export default Header
