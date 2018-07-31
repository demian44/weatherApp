import React from "react";

const Location = ({ place }) => (
  //destructuring
  <div>
    <h1>
      {place.city}, {place.country}
    </h1>
  </div>
);

export default Location;
