import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
// Necesito importar react para poder usar  JSX
const WeatherLocation = () => {
  let place = { city: "Buenos Aires", country: "Argentina" };
  return (
    <div>
      <Location place = {place}/>
      <WeatherData />
    </div>
  );
};

export default WeatherLocation;
