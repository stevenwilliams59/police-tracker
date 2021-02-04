import React, { Component } from 'react';
import CrimesList from './CrimesList';

export default class FetchCrimes extends Component {
  state = {
    crimes: [],
    loading: true,
    latitude: null,
    longitude: null
  };

  render() {
    return (
      <main>
        <h2>Crimes</h2>
        {
          // Form to enter lat and long and set them in state
        }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="long">Longitude:</label>
          <input
            type="text"
            id="long"
            name="long"
            onChange={this.handleLongitudeChange}
          />
          <label htmlFor="lat">Latitude:</label>
          <input
            type="text"
            id="lat"
            name="lat"
            onChange={this.handleLatitudeChange}
          />
          <button>Check crime rates</button>
        </form>
        {this.state.loading ? (
          <p>Loading!!!</p>
        ) : (
          <CrimesList crimes={this.state.crimes} />
        )}
      </main>
    );
  }
  handleLongitudeChange = (event) => {
    this.setState({ longitude: event.target.value });
  };
  handleLatitudeChange = (event) => {
    this.setState({ latitude: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.latitude && this.state.longitude) {
      fetch(
        `https://data.police.uk/api/crimes-at-location?date=2020-02&lat=${this.state.latitude}&lng=${this.state.longitude}`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ crimes: data, loading: false }));
    }
  };
}
