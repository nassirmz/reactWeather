var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      city: 'Miami',
      temp: 88
    };
  },
  handleSearch: function (city) {
    this.setState({
      city: city,
      temp: 23
    })
  },
  render: function () {
    var temp = this.state.temp;
    var city = this.state.city;
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