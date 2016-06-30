var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var city = this.refs.city.value;
    if(city.length > 0) {
      this.refs.city.value = '';
      this.props.onSearch(city);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
         <input type="search" placeholder="Search weather by city" ref="city" />
         <button className="expanded hollow button">Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
