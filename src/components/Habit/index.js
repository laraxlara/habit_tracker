import React from 'react'
import { Container } from '@mui/system'
import Checkbox from './Checkbox'
import CheckboxInput from './CheckboxInput'
import CheckboxLabel from './CheckboxLabel'

const Habit = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Checkbox>
            <CheckboxInput />
            <CheckboxLabel />
        </Checkbox>
    </Container>
  )
}

export default Habit
