import React from 'react'
import { Link } from 'react-router-dom'

const Company = () => {
  return (
    <div className='navbar_container'>
      <Link to={'/companyinfo'}>
      <li>Company Info</li>
      </Link> 
    </div>
  )
}

export default Company
