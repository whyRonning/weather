import React, { ReactElement} from "react";
import {DailyWeatherBlock, Titles, WeeklyWeatherBlock} from "./weather";
type props={
    city:string,
    weathersBlock:Array<ReactElement>,
    DailyWeather:()=>ReactElement
}

export let CityWeathers=(props:props)=>{

    return(
        <div>
            <Titles>Погода в городе {props.city}</Titles>
            <Titles>Сегодня</Titles>
            <DailyWeatherBlock>
                <props.DailyWeather/>
            </DailyWeatherBlock>
            <Titles>На неделю</Titles>
            <WeeklyWeatherBlock>{props.weathersBlock}</WeeklyWeatherBlock>
        </div>
    )
}