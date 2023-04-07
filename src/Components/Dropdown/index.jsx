import React, { useState } from 'react'

import './styles.scss'

const Dropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { title, content } = item

    // toggle function to handle the state of the dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="dropdown large">
            <div onClick={toggleDropdown} className="dropdown__header">{title}</div>
            {isOpen && <div className="dropdown__content">{ typeof (content) === typeof ([]) ? content.map((item, index) => <div key={index}>{item}</div>) : content}</div>}
        </div>
    )
}

export default Dropdown
