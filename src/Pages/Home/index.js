import React 
//{useEffect, useState} 
    from "react";

//import JSON files
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Gallery from "../../Components/Gallery";



const Home = () => {

    const message = 'Chez vous, partout et ailleurs'

    return (
        <div>
            <Header />
            <Banner content={message} />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;
