import React from "react";
import PropTypes from "prop-types";

const Location = ({ city, country }) => (
  //destructuring
  <div>
    <h1>
      {city}, {country}
    </h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
}

export default Location;
