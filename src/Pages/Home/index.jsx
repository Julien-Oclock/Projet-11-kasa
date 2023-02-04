import React from "react";


// Components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";


const Home = () => {
    const message = 'Chez vous, partout et ailleurs'
    return (
        <div>
            <Header />
            <Banner content={message} />
            <Footer />
        </div>
    );
}

export default Home;
