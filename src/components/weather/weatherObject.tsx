import React from "react";
import styled from "styled-components";

type props={
    city:string,
    pickedCities:Array<string>,
    setPickedCities:(arr:Array<string>)=>void
    historyButtHandler:(city:string,history:any)=>void,
    deleteButtHandler:(city:string,pickedCities:Array<string>,setPickedCities:(arr:Array<string>)=>void)=>void,
    history:any
}
let Butt=styled.button<{first?:boolean}>`
    background-color:#63dcd1;
    width:10vw;
    height:4vh;
    color:white;
    cursor:pointer;
    margin-right:${props=>props.first?"2vw;":"0"};
    transition:.4s ease;
    &:hover {
        color:white;
        border-color:#63dcd1;
        background:none;
    }
`;
let H2=styled.h2`
    color:white;
    text-align:center;
`;
let ObjectWrapper=styled.div`
    width:100%;
    background-color:#aa02be;
`;
export let WeatherObject=(props:props)=>{

    return (
        <ObjectWrapper>
            <H2>{props.city}</H2>
            <Butt first onClick={()=>{props.historyButtHandler(props.city,props.history)}}>Посмотреть погоду</Butt>
            <Butt onClick={()=>{props.deleteButtHandler(props.city,props.pickedCities,props.setPickedCities)}}>Удалить город из спика</Butt>
        </ObjectWrapper>
    )
}