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

  state = {
    myData: fakeweather
  }



  render() {

    const switchImages = () => {
      for (let i = 0; i <= 7; i++) {
        if (this.state.myData.list[i].weather[0].description === "clear sky") {
          return clear
        }
        else if (this.state.myData.list[i].weather[0].description === "broken clouds") {
          return storm
        }
        else if (this.state.myData.list[i].weather[0].description === "light rain") {
          return drizzle
        }
        else if (this.state.myData.list[i].weather[0].description === "moderate rain") {
          return partlyCloudy
        }
        else if (this.state.myData.list[i].weather[0].description === "few clouds") {
          return fog
        }
      }
    }

    return (
      <div className="app">
        <Search />
        <CurrentTemp
          describeTemp={this.state.myData.list[6].weather[0].description}
          tempMin={(this.state.myData.list[6].main.temp_min - 273.15).toFixed()}
          tempMax={(this.state.myData.list[6].main.temp_max - 273.15).toFixed()}
          humidity={this.state.myData.list[6].main.humidity}
          pressure={this.state.myData.list[6].main.pressure}
          images={fakeweather}
        />
        <HourlyTemp
          propsData={this.state.myData}
          switchs={switchImages(this.state.myData)}
        />
      </div>
    );
  }
}

export default App;
