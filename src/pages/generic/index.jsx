import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Navbar';


const Generic = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar/>
      Generic {location.pathname}</div>
  )
}

export default Generic