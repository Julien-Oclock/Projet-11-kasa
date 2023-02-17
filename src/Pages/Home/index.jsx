/* eslint-disable no-unused-vars */
import React from 'react'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import Gallery from '../../Components/Gallery'

import data from '../../Data/db.json'
import banner from '../../assets/images/bannerImg.png'

const Home = () => {
    const message = 'Chez vous, partout et ailleurs'

    return (
        <div>
            <Header />
            <Banner content={message} cover={banner} />
            <Gallery data={data}/>
            <Footer />
        </div>
    )
}

export default Home
