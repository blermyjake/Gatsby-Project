import React from 'react'
import Link from 'gatsby-link'
import Checkout from '../components/Checkout';


const ThirdPage = ({data}) => (
  <div className='home_container'>
    <h1>Clearance</h1>
    <Checkout /><br /><br />
    <div className='bottom_links'>

    <Link className='links' to="/page-2">
    <img className='arrow'src="https://image.flaticon.com/icons/svg/126/126492.svg" alt="Back"/>
    
    </Link>
    <Link className='links' to="/page-4/">
    <img className='arrow'src="https://image.flaticon.com/icons/svg/118/118740.svg" alt="next"/>    
    </Link>
    </div>
  </div>
)


export default ThirdPage
