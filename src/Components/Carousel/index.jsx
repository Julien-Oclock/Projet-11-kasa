import React, { useState } from 'react'
import PropTypes from 'prop-types'


import './styles.scss'

const Carousel = ({ Images }) => {
    const [currentIndex, updateCurrentIndex] = useState(0)
    const currentImage = Images[currentIndex]
    return (
        <div className="carousel" style={{ backgroundImage: `url(${currentImage})` }}>
        {Images.length > 1 && (
          <div className="nav">
            <div
              className="nav__arrow_left"
              onClick={() =>
                updateCurrentIndex(
                  currentIndex === 0 ? Images.length - 1 : currentIndex - 1
                )
              }>{
                <svg className='arrow_left' width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>
                }
            </div>
            <div
              className="nav__arrow_right"
              onClick={() =>
                updateCurrentIndex(
                  currentIndex === Images.length - 1 ? 0 : currentIndex + 1
                )
              }>
              <svg className='arrow_right' width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
              </svg>
            </div>
          </div>
        )}
        {Images.length > 1 && (
          <div className="carousel__counter">
            {currentIndex + 1}/{Images.length}
          </div>
        )}
      </div>
    )
}

export default Carousel

Carousel.prototype = {
    Images: PropTypes.arrayOf(PropTypes.string).isRequired
}

Carousel.defaultProps = {
    Images: []
}

