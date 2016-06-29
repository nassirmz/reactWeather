var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var city = this.props.city;
    var temp = this.props.temp;
    return (
      <div>
        <h3>Its {temp} in {city}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;