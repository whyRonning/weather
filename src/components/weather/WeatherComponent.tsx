import React from "react";
type props={
    date:number,
    temperature:{max:number},
    weatherDescription:string,
    icon:string
}
export let WeatherComponent=(props:props)=>{
    let Days=["Понедельник","Вторник","Среда", "Четверг", "Пятница" ,"Суббота","Воскресенье"]
    let date=new Date(props.date*1000);
    return(
    <div>
        <p>{Days[date.getDay()-1]}</p>
        <p>{date.getDate()}</p>
        <p>{Math.floor(props.temperature.max)}℃</p>
        <p>{props.weatherDescription}</p>
        <img src={"http://openweathermap.org/img/wn/"+props.icon+"@2x.png"} alt=""/>
    </div>
)}