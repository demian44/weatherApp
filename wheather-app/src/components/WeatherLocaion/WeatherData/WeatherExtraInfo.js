import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';


const WeatherExtraInfo = ({ humidiy, wind }) => (
    <div className='weatherExtraInfoCont'>
        <span>{`${humidiy} % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidiy: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;