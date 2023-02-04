import React from "react";
import PropTypes from 'prop-types';


import "./styles.scss";


const Banner = ( {content} ) => {
    return (
        <div className="banner">
            <h1 className="banner__content">{content}</h1>
        </div>
    );
};



export default Banner;


// Props
Banner.propTypes = {
    content: PropTypes.string.isRequired,
};