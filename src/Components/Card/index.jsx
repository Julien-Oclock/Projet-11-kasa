// eslint-disable-next-line
import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Card = ({ item }) => {
    const { title } = item
    return (
        <div
            onClick={() => { console.log('click') }}
            className="card"
            style={{ backgroundImage: `url(${item.cover})` }}
        >
            <h3 className="card__title">{title}</h3>
        </div>
    )
}

export default Card

Card.prototype = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
}
