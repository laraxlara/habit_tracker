import React from 'react'
import axios from 'axios'
import useQuery from '../../hooks/useQuery'
import Habit from '../Habit/index'
import { Box } from '@mui/material'

const HabitList = (props) => {
    const { response } = useQuery(axios.get('http://localhost:3000/habits'))

  return (
    <>
        {response && response.map((habit) => {
            return (
                <Box key={habit.state.id}>
                    <Habit checked={habit.state.done} to={`/habit/${habit.state.id}`} value={habit.state.title} />
                </Box>
            )
        })}
    </>
  )
}

export default HabitList
