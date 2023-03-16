// eslint-disable-next-line
import React from 'react'

import Logo from '../../assets/logo.svg'

import './styles.scss'

const Header = () => {
    return (
        <header className="header-page">
            <img className="header-page__logo" src={Logo} alt="Logo" />
            <ul className="header-page__nav">
                <li className="header-page__nav-item">
                    <a className="header-page__nav-link" href="/">Acceuil</a>
                </li>
                <li className="header-page__nav-item">
                    <a className="header-page__nav-link" href="/about"> A Propos</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
