import React from 'react'
import { redirect, useParams } from 'react-router-dom'

import Data from '../../Data/db.json'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Carousel from '../../Components/Carousel'
import TagContainer from '../../Components/TagContainer'
import Dropdown from '../../Components/Dropdown'
import StarContainer from '../../Components/StarContainer'

import './styles.scss'

const Place = () => {
    // get the id from the url
    const idParam = useParams().id
    // find the current place in the data filtered by the id
    const currentPlace = Data.filter((place) => place.id === idParam)[0]
    // data Object for the dropdown
    const dropdownData = [
        {
            title: 'Description',
            content: currentPlace.description
        },
        {
            title: 'Equipement',
            content: currentPlace.equipments
        }
    ]
    // if the place doesn't exist, redirect to the 404 page
    if (!currentPlace) redirect('/NotFound')
    else {
        return (
            <div className='place'>
                <Header />
                <Carousel Images={currentPlace.pictures}/>
                <div className="header">
                    <div className='header__title-wrapper'>
                        <div>
                            <h2 className='header__title-item'>{currentPlace.title}</h2>
                            <p className='header__location'>{currentPlace.location}</p>
                        </div>
                        <TagContainer Tags={currentPlace.tags} />
                    </div>
                    <div className="header__host">
                        <div className='header__hostname-wrapper'>
                            <div className='header__hostname'>
                                {currentPlace.host.name}
                            </div>
                            <div className='header__host-picture'>
                                <img src={currentPlace.host.picture} alt="host avatar picture" />
                            </div>
                        </div>
                        <StarContainer rate={currentPlace.rating} />
                    </div>
                </div>
                <div className='dropdown-wrapper'>
                    {dropdownData.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dropdown className='dropdown-place' key={index} item={item}/>
                            </div>
                        )
                    })}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Place
