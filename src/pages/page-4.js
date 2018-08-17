import React, { Component } from 'react'
import Link from 'gatsby-link'

import QuoteGenerator from '../components/QuoteGenerator'

export default class FourthPage extends Component {
  state = {
    list1: true,
    list2: false,
    list3: false,
    list4: false,
    list5: false,
  }

  toggle2 = () => {
    this.setState({
      list2: true,
    })
  }

  toggle3 = () => {
    this.setState({
      list3: true,
    })
  }

  toggle4 = () => {
    this.setState({
      list4: true,
    })
  }

  toggle5 = () => {
    this.setState({
      list5: true,
    })
  }

  render() {
    const { list2, list3, list4, list5 } = this.state
    return (
      <div className="home_container">
        <div className="setup_container">
          <h1>Setup</h1>
          <div className='setup_list'>
            <p onClick={this.toggle2}>
              npm install --global gatsby-cli (sudo for mac users)
            </p>
            {list2 && <p onClick={this.toggle3}>gatsby new **name of file**</p>}

            {list3 && <p onClick={this.toggle4}>cd in file</p>}

            {list4 && <p onClick={this.toggle5}>gatsby develop</p>}

            {list5 && <p>Go to localhost:8000</p>}
          </div>
        </div>
        <div className="quote">
          <QuoteGenerator />
        </div>
        <div className="bottom_links">
        <Link className="links" to="/page-3">
        <img className='arrow'src="https://image.flaticon.com/icons/svg/126/126492.svg" alt="Back"/>            
          </Link>
          <Link className="links" to="/">
            <img className='arrow'src="https://image.flaticon.com/icons/svg/149/149412.svg" alt=""/>
          </Link>
        </div>
      </div>
    )
  }
}
