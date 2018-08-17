import React from 'react'
import Link from 'gatsby-link'

import './pages.css'

const IndexPage = () => (
  <div className="main_container">
    <div className="main_sub">
      <img
        className="logo"
        src="https://www.gatsbyjs.org/static/logo-gatsby-0603eb9dd6bdfec9599dbc7590f891be-347ea.jpg"
        alt="Gatsby Logo"
      />
      <h1 className="main_text">Gatsby JS Tutorial</h1>
      <h3 className="main_sub_text">Jim Timery</h3>
    </div>
    <div>
      <Link className="links" to="/page-2/">
        <img
          className="arrow"
          src="https://image.flaticon.com/icons/svg/118/118740.svg"
          alt="next"
        />
      </Link>
    </div>
  </div>
)

export default IndexPage
