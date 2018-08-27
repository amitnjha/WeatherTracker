import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={cityData.city.name}>
        <td>
          <GoogleMap
            lat={cityData.city.coord.lat}
            lon={cityData.city.coord.lon}
          />
        </td>
        <td>
          <Chart data={temps} color="blue" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="red" units="hPA" />
        </td>
        <td>
          <Chart data={humidity} color="humidity" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherList);
