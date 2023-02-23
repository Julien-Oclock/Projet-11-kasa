// eslint-disable-next-line
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Place from '../../Pages/Place'

import './styles.scss'

const Card = ({ item }) => {
    const { title, id, cover } = item
    return (
        <Link to={`/place/${item.id}`}>
            <div
                className="card"
                style={{ backgroundImage: `url(${cover})` }}
            >
                <h3 className="card__title">{title}</h3>
            </div>
        </Link>
    )
}

export default Card

Card.prototype = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
}
