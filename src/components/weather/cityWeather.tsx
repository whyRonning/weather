import React, {ReactElement} from "react";
type props={
    city:string,
    weathersBlock:Array<ReactElement>
}
export let CityWeathers=(props:props)=>{

    return(
        <div>
            <h1>{props.city}</h1>
            {props.weathersBlock}
        </div>
    )
}