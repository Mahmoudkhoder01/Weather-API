import React from "react";


class HourlyTemp extends React.Component {

    render() {
        return (
            <div className="dayDetails">
                {this.props.propsData.list.slice(0, 7).map((data, index) => {
                    return <article key={index}>
                        <time>{this.props.propsData.list[index].dt_txt.slice(11, 16)}</time>
                        <img src={this.props.switchs} alt="ad" />
                        <span>{(this.props.propsData.list[index].main.temp).toFixed()}&deg;C</span>
                    </article>
                })}
            </div>
        );
    }
}
export default HourlyTemp;
