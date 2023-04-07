import React from 'react'
import PropTypes from 'prop-types'


import './styles.scss'

const StarContainer = ({ rate }) => {
    const stars = []
    let star = ''
    for (let i = 0; i < 5; i++) {
      if (rate > i) {
        star = <svg className='star' key={i} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
               </svg>
      } else {
        star = <svg className='star' key={i} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
              </svg>
      }
      stars.push(star)
    }
    return (
        <div>
            {stars.map((star) => star)}
        </div>
    )
}

export default StarContainer

StarContainer.propTypes = {
    rate: PropTypes.number.isRequired
}

StarContainer.defaultProps = {
    rate: 0
}
