import React from 'react'
import './Hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import textHero from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVLAS ONLY</h2>
            <div>   
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={handIcon} alt="" />
                </div>
                <p>collections</p>
                <p>fo everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={textHero} alt="" />
        </div>
    </div>
  )
}

export default Hero