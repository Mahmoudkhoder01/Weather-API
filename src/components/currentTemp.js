import React from "react";
import clear from "../img/weather-icons/clear.svg";
import storm from "../img/weather-icons/mostlycloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import partlyCloudy from "../img/weather-icons/partlycloudy.svg";

class CurrentTemp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    // const switchImages = (i) => {
    //   for (let i = 5; i <= 11; i++) {
    //     if (this.props.images.list[i].weather[0].description === "clear sky")
    //       return <img src={clear} alt={"clear sky"} />
    //     else if (this.props.images.list[i].weather[0].description === "broken clouds")
    //       return <img src={storm} alt={"broken clouds"} />
    //     else if (this.props.images.list[i].weather[0].description === "light rain")
    //       return <img src={drizzle} alt={"light rain"} />
    //     else if (this.props.images.list[i].weather[0].description === "moderate rain")
    //       return <img src={partlyCloudy} alt={"moderate rain"} />
    //     else if (this.props.images.list[i].weather[0].description === "few clouds")
    //       return <img src={storm} alt={"few clouds"} />

    //   }
    // }

    return (
      <main className="app__main">
        <figure>
          <img src={storm} alt={"storm"}/>
          <figcaption>{this.props.describeTemp}</figcaption>
        </figure>
        <div className="describeTemp">
          <span>Temperature</span> {this.props.tempMin}&deg;to {this.props.tempMax}&deg;C
          <div>
            <p>
              <span>Humidity</span> {this.props.humidity}% <span>Pressure</span> {this.props.pressure}
            </p>
          </div>
        </div>
      </main>
    );
  }
}
export default CurrentTemp;