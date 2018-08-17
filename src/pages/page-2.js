import React, { Component } from 'react'
import Link from 'gatsby-link'

import QuoteGenerator from '../components/QuoteGenerator'

class SecondPage extends Component {
  render() {
    return (
      <div className="home_container">
        <div className="home_top">
          <div className="holder">
            <h2>What</h2>
            <div className="hidden">
              <p>Site-builder</p>
              <p>Friendly to programers</p>
            </div>
          </div>

          <div className="holder">
            <h2>Why</h2>
            <div className="hidden">
              <p>Time Saver</p>
              <p>Control</p>
              <p>Simplistic</p>
              <p>Speed</p>
              <p>Great Documentation</p>
            </div>
          </div>

          <div className="holder">
            <h2>Plugins</h2>
            <div className="hidden">
              <p>Link</p>
              <p>E-Commerce</p>
              <p>Stripe</p>
            </div>
          </div>
        </div>
        <div className="quote">
          <QuoteGenerator />
        </div>

        <div className="bottom_links">
          <Link className="links" to="/">
            <img className='arrow'src="https://image.flaticon.com/icons/svg/126/126492.svg" alt="Back"/>
          </Link>
          <Link className="links" to="/page-3/">
          <img className='arrow'src="https://image.flaticon.com/icons/svg/118/118740.svg" alt="next"/>
          </Link>
        </div>
      </div>
    )
  }
}

// const SecondPage = () => (

// )

export default SecondPage
