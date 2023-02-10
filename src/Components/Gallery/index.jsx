import React from "react";

import Card from "../Card";

import './styles.scss';

const Gallery = () => {
    return <div className="card-container">
        <Card key="1"  title ='titre de la location'/>
        <Card key="2" title ='titre de la location'/>
        <Card key="3"  title ='titre de la location'/>
        <Card key="4"  title ='titre de la location'/>
        <Card key="5"  title ='titre de la location'/>
        <Card key="6"  title ='titre de la location'/>
    </div>;
}

export default Gallery;