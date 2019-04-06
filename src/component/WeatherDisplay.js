import React, { Component } from "react";
import { API_Key, Base_Link } from "../Config";
import WeatherCard from "./WeatherCard";
import "./style/WeatherDisplay.css";

class WeatherDisplay extends Component {
  state = {
    isLoaded: false,
    weatherData: null,
    error: null
  };

  componentWillMount() {
    const getWeather = position => {
      fetch(
        Base_Link +
          "lat=" +
          position.coords.latitude +
          "&lon=" +
          position.coords.longitude +
          "&appid=" +
          API_Key
      )
        .then(response => response.json())
        .then(data => this.setState({ weatherData: data, isLoaded: true }));
    };
    navigator.geolocation.getCurrentPosition(getWeather);
  }

  render() {
    let weatherCard;
    const loadMessage = "Retrieving Data...";
    if (this.state.isLoaded) {
      weatherCard = (
        <WeatherCard
          name={this.state.weatherData.name}
          status={this.state.weatherData.weather[0].main}
          description={this.state.weatherData.weather[0].description}
        />
      );
    }
    return (
      <div className="weather-container">
        <div>
          <h2>Weather</h2>
        </div>
        <div>
          <h5>Current Location Weather</h5>
          {this.state.isLoaded ? " " : "Retrieving Data..."}
          {weatherCard}
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;
