import {CityWeathers} from "./cityWeather";
import {useEffect, useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import * as React from "react";
import {connect} from "react-redux";
import {GlobalState} from "../../store/store";
import {WeatherComponent} from "./WeatherComponent";
let MSTP=(state:GlobalState)=>({
    cities:state.weatherReducer.cities
});

let CityWeatherWrapper=(props:any)=>{
    let [weather,setWeather]=useState<Array<any>>([]);
    let history=useHistory();
    useEffect(()=>{
        if(Object.keys(props.cities).find(e=>{return e.toLowerCase()===props.match.params.url.toLowerCase()})) {
            let weatherOfPosition=fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+props.cities[props.match.params.url].lat+"&lon="+props.cities[props.match.params.url].long+"&units=metric&lang=ru&appid=aebaf3b9032ed34ea070ecc08d250e76",{method:"GET"}).then(e=>e.json());
            weatherOfPosition.then(e=>setWeather(e.daily));

        }else {
            history.push("/weather")
        }
    },[setWeather,history,props.match.params.url,props.cities]);
        let weathersBlock = weather.map((e,i) => {
            return <WeatherComponent key={i} date={e.dt} temperature={e.temp} weatherDescription={e.weather[0].description} icon={e.weather[0].icon}/>
        });
        return (
            <CityWeathers weathersBlock={weathersBlock} city={props.match.params.url}/>
        )


};
let withRouterComp=withRouter(CityWeatherWrapper);
export let CityWeatherContainer=connect(MSTP)(withRouterComp);