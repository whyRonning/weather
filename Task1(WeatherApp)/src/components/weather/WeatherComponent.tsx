import React from "react";
import styled from "styled-components";
type props={
    date:number,
    temperature:{max:number},
    weatherDescription:string,
    icon:string
}
let Block=styled.div`
    display:grid;
    background-color:#cfcfcf;
    width:100%;
    justify-items:center;
`;
let Images=styled.img`
    width:5vw;
`;
export let WeatherComponent=(props:props)=>{
    let Days=["Воскресенье","Понедельник","Вторник","Среда", "Четверг", "Пятница" ,"Суббота"];
    let Months=["Января","Февраля", "Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    let date=new Date(props.date*1000);
    return(
    <Block>
        <p>{Days[date.getDay()]}</p>
        <Images src={"http://openweathermap.org/img/wn/"+props.icon+"@2x.png"} alt=""/>
        <p>{props.weatherDescription}</p>
        <p>{Math.floor(props.temperature.max)}℃</p>
        <p>{date.getDate()} {Months[date.getMonth() ]}</p>


    </Block>
)}