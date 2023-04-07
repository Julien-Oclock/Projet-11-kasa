// eslint-disable-next-line
import React from "react";

import PropTypes from 'prop-types'
// Voir avec mentor pour Card
// eslint-disable-next-line no-unused-vars
import Card from '../Card'

import './styles.scss'

const Gallery = ({ data }) => {
    return <div className="card-container">
        {data.map((item) => <Card key={item.id} item={item} />)}
    </div>
}

export default Gallery

Gallery.propTypes = {
    data: PropTypes.array.isRequired
}

Gallery.defaultProps = {
    data: []
}
