import React from 'react'
import axios from 'axios'
import useQuery from '../../hooks/useQuery'
import Habit from '../Habit/index'
import { Box } from '@mui/material'

const HabitList = (props) => {
    const { response } = useQuery(axios.get('http://localhost:8000/habits'))

  return (
    <>
        {response && response.map((habit) => {
            return (
                <Box key={habit.id}>
                    <Habit checked={habit.done} to={`/habit/${habit.id}`} value={habit.title} />
                </Box>
            )
        })}
    </>
  )
}

export default HabitList
