import React from 'react'
import Layout from '../components/layout'
import HomeSection from '../components/HomeSection/HomeSection'
import Habit from '../components/Habit'

const Home = () => {
  return (
    <Layout>
      <HomeSection />
      <Habit />
    </Layout>
  )
}

export default Home
