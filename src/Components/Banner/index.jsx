// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Banner = ({ content, cover }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${cover})` }}>
            <h1 className="banner__content">{content}</h1>
        </div>
    )
}

export default Banner

// Props
Banner.propTypes = {
    content: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

// create default values for props
Banner.defaultProps = {
    content: '',
    cover: ''
}
