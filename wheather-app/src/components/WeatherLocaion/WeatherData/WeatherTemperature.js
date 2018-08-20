import React from 'react';
import WeatherIcons from 'react-weathericons';
import { SLEET, CLOUD, CLOUDY, RAIN, SNOW, WINDY, SUN } from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';


const WeatherTemperature = ({ temperature, weatherState }) => {

    return <div className='weatherTemperatureCont'>
        {GetWeatherIcon(weatherState)}
        <span>
            {`${temperature} °C`}
        </span>
    </div>;
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.oneOf([SLEET, CLOUD, CLOUDY, RAIN, SNOW, WINDY, SUN]).isRequired
}

/*** Functions  *****************************/
const GetWeatherIcon = weatherState => {
    let strIcon = "";
    switch (weatherState) {
        case SLEET:
            strIcon = "sleet";
            break;
        case CLOUD:
            strIcon = "cloud";
            break;
        case CLOUDY:
            strIcon = "cloudy";
            break;
        case RAIN:
            strIcon = "rain";
            break;
        case SNOW:
            strIcon = "snow";
            break;
        case WINDY:
            strIcon = "windy";
            break;
        case SUN:
        default:
            strIcon = "day-sunny";
            break;
    }
    return <WeatherIcons name={strIcon} size="2x"/>
}


export default WeatherTemperature;