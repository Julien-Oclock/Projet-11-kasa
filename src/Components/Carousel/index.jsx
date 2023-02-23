import React, { useState } from 'react'

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
              }>{'<'}
        </div>
            <div
              className="nav__arrow_right"
              onClick={() =>
                updateCurrentIndex(
                  currentIndex === Images.length - 1 ? 0 : currentIndex + 1
                )
              }
            >&gt;</div>
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
