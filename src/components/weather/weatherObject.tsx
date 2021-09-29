import React from "react";

type props={
    city:string,
    pickedCities:Array<string>,
    setPickedCities:(arr:Array<string>)=>void
    historyButtHandler:(city:string,history:any)=>void,
    deleteButtHandler:(city:string,pickedCities:Array<string>,setPickedCities:(arr:Array<string>)=>void)=>void,
    history:any
}
export let WeatherObject=(props:props)=>{

    return (
        <div>
            <h1>{props.city}</h1>
            <button onClick={()=>{props.historyButtHandler(props.city,props.history)}}>Посмотреть погоду</button>
            <button onClick={()=>{props.deleteButtHandler(props.city,props.pickedCities,props.setPickedCities)}}>Удалить город из спика</button>
        </div>
    )
}