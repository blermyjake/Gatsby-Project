import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div className="home_container">
    <div>
      <h1>What</h1>
      <p>Site-builder</p>
      <p>Friendly to programers</p>
      <h3>Why</h3>
      <p>Control</p>
      <p>Simplistic</p>
      <p>Speed</p>
      <h3>Plugins</h3>
      <ul>
        <li>Link</li>
        <li>E-Commerce</li>
        <li>Image Optimizer</li>
      </ul>
    </div>
    <div className="bottom_links">
      <Link className='links' to="/">Previous</Link>
      <Link className='links' to="/page-3/">Next</Link>
    </div>
  </div>
)

export default SecondPage
