import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ title }) => {
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>
        </div>
    );
}

export default Card;

Card.prototype = {
    title: PropTypes.string.isRequired,
};
