import React from 'react'
import Layout from '../components/layout'
import Box from '@mui/material/Box'
import HabitForm from '../components/HabitForm'

const AddNewHabit = () => {

  return (
    <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <HabitForm />
        </Box>
    </Layout>
  )
}

export default AddNewHabit
