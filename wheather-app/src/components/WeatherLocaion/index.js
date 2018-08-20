import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

// Necesito importar react para poder usar  JSX
const WeatherLocation = () => {
  return (
    <div>
      <Location city={"Buenos Aires"} country={"Argentina"} />
      <WeatherData />
    </div>
  );
};

export default WeatherLocation;
