import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useQuery from '../hooks/useQuery'
import Layout from '../components/layout'
import HabitForm from '../components/HabitForm'
import { Box } from '@mui/material'

const HabitDetails = () => {
    const { id } = useParams()
    const { response } = useQuery(axios.get('http://localhost:8000/habits/' + id))

  return (
    <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {response && [response].map((habit) => {
            return (
                <>
                    <HabitForm title={habit.title} description={habit.description} />
                </>
            )
        })}
        </Box>
    </Layout>
  )
}

export default HabitDetails
