import React from "react";
import {citiesType} from "../../store/weatherReducer";
type props={
    findStrokeText:string,
    setFindStrokeText:(findStrokeText:string)=>void,
    changeStrokeHandler:(stroke:string,setFindStrokeText:(text:string)=>void,cities:citiesType,setFilteredCities:(filteredCity:Array<string>)=>void)=>void,
    cities:citiesType,
    setFilteredCities:(filteredCity:Array<string>)=>void
}
export let FindStroke=(props:props)=>(
    <input value={props.findStrokeText} placeholder={"Введите название города для наблюдения за погодой в нем"} onChange={(e)=>{props.changeStrokeHandler(e.target.value,props.setFindStrokeText,props.cities,props.setFilteredCities)}}/>
);