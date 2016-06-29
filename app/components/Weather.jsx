var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      city: 'Miami',
      temp: 88
    };
  },
  handleSearch: function (city) {
    var that = this;
    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp
      })
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },
  render: function () {
    var {temp, city} = this.state;
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm  onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} city={city}/>
      </div>
    )
  }
});

module.exports = Weather;