import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '@iconify/react'

import './styles.scss'

const Dropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isRotated, setIsRotated] = useState(false)
    const { title, content } = item

    // toggle function to handle the state of the dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        setIsRotated(!isRotated)
    }
    return (
        <div className="dropdown large">
            <div onClick={toggleDropdown} className="dropdown__header">
                {title}
                <div className="dropdown__icon">
                    <Icon className={`dropdown__icon-item ${isRotated ? 'rotate' : ''}`} icon="fa:chevron-down" />
                </div>
            </div>
            {isOpen && <div className="dropdown__content">{ typeof (content) === typeof ([]) ? content.map((item, index) => <div key={index}>{item}</div>) : content}</div>}
        </div>
    )
}

export default Dropdown

Dropdown.prototype = {
    item: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ])
    }).isRequired
}

Dropdown.defaultProps = {
    item: {
        title: '',
        content: ''
    }
}
