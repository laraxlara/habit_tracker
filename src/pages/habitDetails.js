import React from 'react'
import { useParams } from 'react-router-dom'

const HabitDetails = () => {
    const { id } = useParams()
  return (
    <div>
      <h1>Habit Details - { id }</h1>
    </div>
  )
}

export default HabitDetails
