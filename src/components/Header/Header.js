import React from 'react'
import { Container } from '@mui/material';

import '../../styles/Header.css'

const Header = () => {
  return (
    <header>
      <Container maxWidth='xl'>
        <h1>Habit Tracker</h1>
      </Container>
    </header>
  )
}

export default Header
