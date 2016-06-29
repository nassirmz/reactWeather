var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return (
      <div>
        <input type="text" placeholder="Enter city name" ref="city" />
        <button>Get Weather</button>
      </div>
    )
  }
});

module.exports = WeatherForm;