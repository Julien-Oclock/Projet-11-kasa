// eslint-disable-next-line
import React from 'react'

import './styles.scss'
import logoFooter from '../../assets/logo_footer.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container-logo">
                    <img src={logoFooter} alt="" />
                </div>
                <div className="footer__content">
                    <p className="footer__content-item">
                        2020 Kasa. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
