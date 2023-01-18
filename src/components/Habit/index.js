import React from 'react'
import { Container } from '@mui/system'
import Checkbox from './Checkbox'
import CheckboxInput from './CheckboxInput'
import CheckboxLabel from './CheckboxLabel'

const Habit = (props) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Checkbox>
            <CheckboxInput {...props} />
            <CheckboxLabel {...props} />
        </Checkbox>
    </Container>
  )
}

export default Habit
