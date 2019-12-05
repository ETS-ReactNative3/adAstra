import React from 'react';
import '../stylesheets/weather.scss';

class Weather extends React.Component{

    constructor(props){
        super(props);
        this.state = { lat: 39.0119, long: -98.4194, date: Date.now() }
    }

    componentDidMount(){
        this.getLocation()
    }

    getLocation(){
        function success(pos) {
            const crd = pos.coords;
            this.setState({ lat: crd.latitude, long: crd.longitude })
            this.props.fetchWeather(this.state)
            this.props.fetchSunset(this.state)
        }
        navigator.geolocation.getCurrentPosition(success.bind(this));
    }

    render(){
        let sunset;
        let moon;
        sunset = Object.keys(this.props.sunset).length !== 0 ? this.props.sunset.data.sunset : "";
        moon = Object.keys(this.props.sunset).length !== 0 ? this.props.sunset.data.moonrise : "";
        let forecast = this.props.forecast;
        let name = Object.keys(forecast).length !== 0 ? forecast.data.name : "";
        let tempMin = Object.keys(forecast).length !== 0 ? forecast.data.main.temp_min : "";
        let tempMax = Object.keys(forecast).length !== 0 ? forecast.data.main.temp_max : "";
        let cloudPerc =
          Object.keys(forecast).length !== 0
            ? forecast.data.weather[0].description
            : "";
        tempMin = Math.floor((tempMin - 273.15) * (9/5) + 32)
        tempMax = Math.floor((tempMax - 273.15) * (9/5) + 32)
        
        return (
          <div className="weather">
            <div className="weather-content">
              <div className="moonrise">
                <i className="fa fa-moon" />
                Moonrise at {moon}{" "}
              </div>
              <div className="sunset">
                <i className="fa fa-sun" />
                Sunset at {sunset}{" "}
              </div>
            </div>
            <div className="weather-content forecast">
              <i class="fas fa-map-marker-alt"/>
                <span>{name}  |  
                High: {tempMax} °F  |  
                Low: {tempMin} °F  |  
                Summary: {cloudPerc}
                </span>
              </div>
          </div>
        );
    }
}

export default Weather;