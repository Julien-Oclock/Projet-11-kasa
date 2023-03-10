// eslint-disable-next-line
import React from 'react'

import Logo from '../../assets/logo.svg'

import './styles.scss'

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Logo" />
            <ul className="header__nav">
                <li className="header__nav-item">
                    <a className="header__nav-link" href="/">Acceuil</a>
                </li>
                <li className="header__nav-item">
                    <a className="header__nav-link" href="/about"> A Propos</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
