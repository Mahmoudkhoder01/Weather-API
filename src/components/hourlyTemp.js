import React from "react";
import clear from "../img/weather-icons/clear.svg";
import storm from "../img/weather-icons/mostlycloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import partlyCloudy from "../img/weather-icons/partlycloudy.svg";
import fog from "../img/weather-icons/fog.svg";


class HourlyTemp extends React.Component {

    render() {
        // console.log(this.props.images.list);
        // console.log(this.props.images.list[0].weather[0].description);

        // const switchImages = () => {
        //     for (let i = 5; i <= 11; i++) {
        //         if (this.props.propsData.list[i].weather[0].description === "clear sky")
        //             return <img src={clear} alt={"clear sky"} />
        //         else if (this.props.propsData.list[i].weather[0].description === "broken clouds")
        //             return <img src={storm} alt={"broken clouds"} />
        //         else if (this.props.propsData.list[i].weather[0].description === "light rain")
        //             return <img src={drizzle} alt={"light rain"} />
        //         else if (this.props.propsData.list[i].weather[0].description === "moderate rain")
        //             return <img src={partlyCloudy} alt={"moderate rain"} />
        //         else if (this.props.propsData.list[i].weather[0].description === "few clouds")
        //             return <img src={fog} alt={"few clouds"} />
        //     }
        // }
        return (
            <div className="dayDetails">
                {this.props.propsData.list.slice(0, 7).map((data, index) => {
                    return <article key={index}>
                        {/* {console.log(this.props.propsData.list[index].dt_txt.slice(11, 16))} */}
                        {console.log(this.props.propsData)}
                        <time>{this.props.propsData.list[index].dt_txt.slice(11, 16)}</time>
                        {/* <img src={this.props.propsData.list[index].weather[index].description} alt=" " /> */}
                        {/* {switchImages()} */}
                        <img src={this.props.switchs} alt="ad"/>
                        <span>{(this.props.propsData.list[index].main.temp - 273.15).toFixed()}&deg;C</span>
                    </article>
                })}
            </div>
        );
    }
}
export default HourlyTemp;



































































{/* <article>
    <time>{this.props.time[0]}</time>
    {switchImages()}
    <span>{this.props.temp[0]}&deg;C</span>
</article>
<article>
    <time>{this.props.time[1]}</time>
    {switchImages()}
    <span>{this.props.temp[1]}&deg;C</span>
</article>
<article>
    <time>{this.props.time[2]}</time>
    {switchImages()}
    <span>{this.props.temp[2]}&deg;C</span>
</article>
<article>
    <time>{this.props.time[3]}</time>
    {switchImages()}
    <span>{this.props.temp[3]}&deg;C</span>
</article>
<article>
    <time>{this.props.time[4]}</time>
    {switchImages()}
    <span>{this.props.temp[4]}&deg;C</span>
</article>
<article>
    <time>{this.props.time[5]}</time>
    {switchImages()}
    <span>{this.props.temp[5]}&deg;C</span>
</article>
<article>
    <time>{this.props.time[6]}</time>
    {switchImages()}
    <span>{this.props.temp[6]}&deg;C</span> */}
{/* </article> */}
{/* {Object.keys(this.props.images).map((postData, index) => {
    return <article key={index}>
        <time>{this.props.time[index]}</time>
        <img src={this.props.list[index].weather[index].description} alt=" "/>
        <span>{this.props.temp[index]}&deg;C</span>
    </article>
})} */}