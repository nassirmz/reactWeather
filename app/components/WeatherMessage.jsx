var React = require('react');

var WeatherMessage = ({temp, city}) => {

  return (
    <div>
      <h3>Its {temp} in {city}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
