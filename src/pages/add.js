import React, { useReducer, useState } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import Box from '@mui/material/Box'
import HabitForm from '../components/HabitForm'
import { habitsReducer, INITIAL_STATE, ACTIONS } from '../hooks/habitsReducer'

const AddNewHabit = () => {
  const [state, dispach] = useReducer(habitsReducer, INITIAL_STATE)

  const handleChange = (e) => {
    e.preventDefault()
    dispach({
      type: ACTIONS.ADD_NEW_HABIT,
      payload: { name: e.target.name, value: e.target.value }
    })
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/habits', {
        state
      })
    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <HabitForm title={state.title} description={state.description} onChange={handleChange} onClick={handleClick} />
        </Box>
    </Layout>
  )
}

export default AddNewHabit
