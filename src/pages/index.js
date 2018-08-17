import React from 'react'
import Link from 'gatsby-link'

import './pages.css'

const IndexPage = () => (
  <div className="home_container">
    <div>
      <h1>Gatsby JS</h1>
      <h3>Jim Timery</h3>
    </div>
    <div>
      <Link className='links' to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
