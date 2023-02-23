import React from 'react'
import PropTypes from 'prop-types'


import './styles.scss'

const Tag = ({ item }) => {
    return (
        <div className='tag'>{item}</div>
    )
}

Tag.prototype = {
    item: PropTypes.string.isRequired
}

export default Tag
