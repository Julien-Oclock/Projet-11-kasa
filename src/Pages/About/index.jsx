import React from 'react'

import './styles.scss'

import Dropdown from '../../Components/Dropdown'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'

import banner from '../../assets/images/aboutBanner.jpg'
import data from '../../Data/about.json'
import Footer from '../../Components/Footer'

// import './styles.scss'

const About = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Banner content='' cover={banner}/>
            <div className="about">
                {data.map((item) => <Dropdown key={item.id} item={item}/>)}
            </div>
            <Footer />
        </div>
    )
}

export default About
