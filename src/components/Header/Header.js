import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box } from '@mui/material';
import Button from '../Button';
import logo from '../../images/flower.png'

import '../../styles/Header.css'

const Header = () => {

  const propsNewButton = {
    color: 'white',
    margin: '0 2rem',
    padding: '1rem 2rem',
    border: '2px solid #FFADBC',
    borderRadius: '4px',
    backgroundColor: '#FFADBC',
    text: 'NEW'
  }

  const propsSignOutButton = {
    color: '#FFADBC',
    margin: '0',
    padding: '1rem',
    border: '2px solid #FFADBC',
    borderRadius: '4px',
    backgroundColor: 'white',
    text: 'SIGN OUT'
  }

  return (
    <header>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }} maxWidth='xl'>
        <Link to='/'>
          <img src={logo} alt='Habit Tracker' />
        </Link>
        <Box sx={{ display: 'flex' }}>
          <Link to='/new'>
            <Button {...propsNewButton}  />
          </Link>
          <Button {...propsSignOutButton} />
        </Box>
      </Container>
    </header>
  )
}

export default Header
