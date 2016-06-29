var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (city) {
    var that = this;

    that.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({
        isLoading: false
      });
    });
  },
  render: function () {
    var {isLoading, temp, city} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} city={city}/>
      }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm  onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;