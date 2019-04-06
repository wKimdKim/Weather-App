import React, { Component } from "react";
import "./style/Home.css";
class Home extends Component {
  state = { data: null };
  render() {
    return (
      <div>
        <h1>Hello There!</h1>
        <p>
          Welcome to my very... very... basic weather web application. You might
          be wondering why I made this in the first place. The purpose of this
          web application was for me to learn the very basics of React as well
          as making API calls. I wanted to teach myself new technologies and
          techniques that I did not learn at University.
        </p>
        <p>
          A basic overview of this project was to utilise React's component
          architecture and their routing. For the style, I used Bootstrap's
          predefined components. I also used flexbox for positioning when it was
          needed. As for the data, I used geolocation to obtain the device's
          coordinate and used the OpenWeatherAPI to retrieve the weather data of
          the location.
        </p>
      </div>
    );
  }
}

export default Home;
