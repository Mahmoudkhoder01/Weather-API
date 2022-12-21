import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import CurrentTemp from "./components/currentTemp";
import HourlyTemp from "./components/hourlyTemp";
import fakeweather from "../src/data/Fakeweather.json"

import clear from "./img/weather-icons/clear.svg";
import storm from "./img/weather-icons/mostlycloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import partlyCloudy from "./img/weather-icons/partlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      isLoaded: false,
      city: "London",

    };
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this)
  }


  componentDidMount() {
    this.getData(this.state.city)
    
  }

  getData(cityName) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=fc2fd552bfc51be96da8dbe94816f87d`)
      .then(response => response.json())
      .then(resp => this.setState({ weather: resp, isLoaded: true }));

  }

  handleClick(e) {
    this.setState({
      city: e
    });
    let city = e;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=fc2fd552bfc51be96da8dbe94816f87d`)
      .then(
        (res) => res.json())
      .then(
        (res) => {
          this.setState({
            Weather: res,
            isLoaded: true
          });
        });
  }

  render() {
    const switchImages = () => {
      for (let i = 5; i <= 11; i++) {
        if (this.state.weather.list[i].weather[0].description === "clear sky") {
          return clear
        }
        else if (this.state.weather.list[i].weather[0].description === "broken clouds") {
          return storm
        }
        else if (this.state.weather.list[i].weather[0].description === "light rain") {
          return drizzle
        }
        else if (this.state.weather.list[i].weather[0].description === "moderate rain") {
          return partlyCloudy
        }
        else if (this.state.weather.list[i].weather[0].description === "few clouds") {
          return fog
        }
      }
    }




    return this.state.isLoaded ? (<div className="app">
      <Search click={this.handleClick} city={this.state.city} />
      <CurrentTemp
        describeTemp={this.state.weather.list[6].weather[0].description}
        tempMin={(this.state.weather.list[6].main.temp_min).toFixed()}
        tempMax={(this.state.weather.list[6].main.temp_max).toFixed()}
        humidity={this.state.weather.list[6].main.humidity}
        pressure={this.state.weather.list[6].main.pressure}
        images={fakeweather}
        switchs={switchImages(this.state.weather)}
      />
      <HourlyTemp
        propsData={this.state.weather}
        switchs={switchImages(this.state.weather)}
      />
    </div>
    ) : (<h1 className="load">Loading...</h1>)
  }
}

export default App;
