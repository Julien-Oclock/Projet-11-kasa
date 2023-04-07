import React from 'react'
import PropTypes from 'prop-types'


import './styles.scss'

const Tag = ({ item }) => {
    return (
        <div className='tag'>{item}</div>
    )
}

export default Tag

Tag.prototype = {
    item: PropTypes.string.isRequired
}

Tag.defaultProps = {
    item: ''
}


