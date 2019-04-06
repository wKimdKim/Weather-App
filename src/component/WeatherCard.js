import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./style/WeatherCard.css";

class WeatherCard extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>Status: {this.props.name}</Card.Text>
          <Card.Text>Description: {this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default WeatherCard;
