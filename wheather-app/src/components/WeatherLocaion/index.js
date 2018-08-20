import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { SLEET, CLOUD, CLOUDY, RAIN, SNOW, WINDY, SUN } from '../../constants/weathers';

import './styles.css';
// Necesito importar react para poder usar  JSX
class WeatherLocation extends Component {

  constructor() {
    let data = { humidity: 35, wind: "25 km/h", temperature: 20, weatherState: WINDY };
    super();
    this.state = {
      data: data,
      city: "Buenos Aires"
    }
  }

  handleUpdateClick = () => {
    this.setState({
      city: "Buenos Aire",
      data: { humidity: 25, wind: "10 km/h", temperature: 15, weatherState: CLOUDY }
    });
    console.log("Actualizar");
  }

  render = () => {
    return (
      <div className="weatherLocation" >
        <Location city={this.state.city} />
        <WeatherData data={this.state.data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
