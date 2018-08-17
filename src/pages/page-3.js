import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
  <div className='home_container'>
      <div>

    <h1>Gatsby Setup</h1>
    <p>npm install --global gatsy-cli (sudo for mac users)</p>
    <p>gatsy new (name of file)</p>
    <p>cd in file</p>
    <p>gatsby develop</p>
    <p>Go to localhost:8000</p>
      </div>
      <div className='bottom_links'>

    <Link className='links' to="/page-2">Previous</Link>
    <Link className='links' to="/page-4/">Next</Link><br/>
      </div>
  </div>
)

export default ThirdPage
