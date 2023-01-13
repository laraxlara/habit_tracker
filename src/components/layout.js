import React from 'react'
import Header from './Header/Header'

import '../styles/layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className='main'>
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout
