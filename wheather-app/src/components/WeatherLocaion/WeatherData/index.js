import React from "react";
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { SLEET, CLOUD, CLOUDY, RAIN, SNOW, WINDY, SUN } from '../../../constants/weathers';
import './styles.css';

const WeatherData = () =>
    <div className="weatherDataCont">
        <WeatherExtraInfo humidiy={75} wind={"SOE"} />
        <WeatherTemperature temperature={20} weatherState={SNOW} />
    </div>;

export default WeatherData;
