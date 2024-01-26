import React from 'react'
import './NewsLatter.css'

const NewsLatter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusives offers on your email</h1>
        <p>Subscribe to our newslatter ad stay updated</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLatter