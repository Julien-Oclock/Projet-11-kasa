import React 
//{useEffect, useState} 
    from "react";

//import JSON files
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Gallery from "../../Components/Gallery";



const Home = () => {
    // const [data, setData] = useState();

    // useEffect(() => {
    //     fecthData();
    // }, [])

    const message = 'Chez vous, partout et ailleurs'
    // const fecthData = async () => {
    //     const response = await fetch('../../../Data/db.json');
    //     const data = await response.json();
    //     console.log(data);
    //     setData(data);
    // }
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
