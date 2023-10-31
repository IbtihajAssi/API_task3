import React from 'react'
import { Link } from 'react-router-dom'

function Resturent() {
  return (
    <>
    <Link  className='ms-2 me-4 text-decoration-none' to="/pizza">Pizza</Link>
    <Link className='ms-2 me-4 text-decoration-none' to="/onion">Onion</Link>
    <Link  className='ms-2 me-4 text-decoration-none' to="/cherry">Cherry</Link>


    </>
  )
}

export default Resturent