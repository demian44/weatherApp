import React from "react";
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherData = ({ data }) => {
    let { temperature, weatherState, humidity, wind } = data;
    // console.log(` asdsa ${humidity}`);
    return (
        <div className="weatherDataCont">
            <span><WeatherTemperature temperature={temperature} weatherState={weatherState} /></span>
            <span><WeatherExtraInfo humidity={humidity} wind={wind} /></span>
        </div>
    );
}

WeatherData.propType = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}

export default WeatherData;
