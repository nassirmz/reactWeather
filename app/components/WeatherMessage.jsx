var React = require('react');

var WeatherMessage = ({temp, city}) => {

  return (
    <div>
      <h3 className="text-center">Its {temp} in {city}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
