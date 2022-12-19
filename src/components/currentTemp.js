import React from "react";
import storm from "../img/weather-icons/mostlycloudy.svg";

class CurrentTemp extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
          <main className="app__main">
        <figure>
            <img src={storm} alt="cat"></img>
            <figcaption>overcast clouds</figcaption>
          </figure>
          <div className="describeTemp">
            <span>Temperature</span> 10&deg;to 11&deg;C
          <div>
            <p>
              <span>Humidity</span> 78% <span>Pressure</span> 1008.48
            </p>
          </div>
          </div>
        </main>
    );
  }
}
export default CurrentTemp;