import React from "react";
import {citiesType} from "../../store/weatherReducer";
import styled from "styled-components";
type props={
    findStrokeText:string,
    setFindStrokeText:(findStrokeText:string)=>void,
    changeStrokeHandler:(stroke:string,setFindStrokeText:(text:string)=>void,cities:citiesType,setFilteredCities:(filteredCity:Array<string>)=>void)=>void,
    cities:citiesType,
    setFilteredCities:(filteredCity:Array<string>)=>void
}
let StyledInput=styled.input`
    width:30vw;
    height:3vh;
    border-radius:5px;
    margin-left:36vw;
    margin-bottom:3vh;
`;
export let FindStroke=(props:props)=>(
    <StyledInput value={props.findStrokeText} placeholder={"Введите название города для наблюдения за погодой в нем"} onChange={(e)=>{props.changeStrokeHandler(e.target.value,props.setFindStrokeText,props.cities,props.setFilteredCities)}}/>
);