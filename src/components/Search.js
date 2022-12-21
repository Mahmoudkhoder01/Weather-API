import React from "react";

class Search extends React.Component {
  state = {
    input: ""
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header>
          <form action="">
            <input className="search" type="text" name="search2" placeholder="Type in a city name" onChange={(e) => {
              this.setState({ input: e.target.value });
            }} />
            <button type="submit" onClick={(e)=>{
              e.preventDefault();
              this.props.click(this.state.input);
            }}>Find Weather</button>
          </form>
        </header>
      </>
    );
  }
}
export default Search;
