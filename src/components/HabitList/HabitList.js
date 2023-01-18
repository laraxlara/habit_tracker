import React from 'react'
import axios from 'axios'
import useQuery from '../../hooks/useQuery'
import Habit from '../Habit/index'
import { Box } from '@mui/material'

const HabitList = (props) => {
    const { response, isLoading, error } = useQuery(axios.get(' http://localhost:8000/habits'))

  return (
    <>
        {isLoading && <h1>Loading...</h1>}
        {error && <div>{error}</div>}
        {response && response.map((habit) => {
            return (
                <Box key={habit.id}>
                    <Habit checked={habit.done} value={habit.title} link={habit.id} />
                </Box>
            )
        })}
    </>
  )
}

export default HabitList
