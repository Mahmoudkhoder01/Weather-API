import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
          <form action="">
            <input className="search" type="text" name="search2" placeholder="Type in a city name"/>
              <button type="submit">Find Weather</button>
          </form>
        </header>
        <main className="app__main">
        <figure>
            <img src="http://placekitten.com/200/200" alt="cat"></img>
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
        <div className="dayDetails">
          <article>
            <time>03:00</time>
            <img src="http://placekitten.com/200/200" alt="cat" />
            <span>8&deg;C</span>  
          </article>
          <article>
            <time>06:00</time>
            <img src="http://placekitten.com/200/200" alt="cat" />
            <span>8&deg;C</span>  
          </article>
          <article>
            <time>09:00</time>
            <img src="http://placekitten.com/200/200" alt="cat" />
            <span>8&deg;C</span>  
          </article>
          <article>
            <time>12:00</time>
            <img src="http://placekitten.com/200/200" alt="cat" />
            <span>8&deg;C</span>  
          </article>
          <article>
            <time>15:00</time>
            <img src="http://placekitten.com/200/200" alt="cat" />
            <span>8&deg;C</span>  
          </article>
          <article>
            <time>18:00</time>
            <img src="http://placekitten.com/200/200" alt="cat" />
            <span>8&deg;C</span>  
          </article>
          <article>
            <time>21:00</time>
            <img src="http://placekitten.com/200/200" alt="cat" />
            <span>8&deg;C</span>  
          </article>
        </div>
      </div>
    );
  }
}

export default App;
