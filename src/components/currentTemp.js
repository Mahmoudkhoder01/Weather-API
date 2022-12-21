import React from "react";
class CurrentTemp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {



    return (
      <main className="app__main">
        <figure>
          <img src={this.props.switchs} alt={"storm"} />
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