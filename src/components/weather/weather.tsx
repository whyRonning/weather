import React, {useEffect, useState} from "react";
import {citiesType} from "../../store/weatherReducer";
import {WeatherObject} from "./weatherObject";
import {useHistory} from "react-router-dom";
import {Modal} from "./Modal";
import styled from "styled-components";
import {message} from "antd";
import {WeatherComponent} from "./WeatherComponent";

type props = {
    cities: citiesType
}
let StyledModal = styled(Modal)<{ isModalVision: boolean }>`
    top:${props => props.isModalVision ? "0vh" : "-100vh"};
    transition:top .8s ease,background-color 1s ease ;
    position:fixed;
    background:${props => props.isModalVision ? "grey" : "none"};
    width:100vw;
    height:100vh;
`;
export let Weather = (props: props) => {
    let [pickedCities, setPickedCities] = useState(() => {
        let cities = localStorage.getItem("clientCity");
        if (cities !== null && cities !== "") {
            return cities.split(",")
        } else {
            return []
        }
    });
    let [locationWeather,setLocationWeather]=useState<Array<any>>([]);
    let [isModalVision, setIsModalVision] = useState(false);
    let history = useHistory();
    useEffect(() => {
        console.log("da")
        if (localStorage.getItem("clientLat") !== "null" && localStorage.getItem("clientLong") !== "null") {
           let weatherOfPosition=fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+localStorage.getItem("clientLat")+"&lon="+localStorage.getItem("clientLong")+"&units=metric&lang=ru&appid=aebaf3b9032ed34ea070ecc08d250e76",{method:"GET"}).then(e=>e.json());
           weatherOfPosition.then(e=>setLocationWeather(e.daily));

        } else {
            setLocationWeather([])
        }

    },[setLocationWeather]);
    let historyButtHandler = (city: string, history: any) => {
        history.push("/weather/" + city)
    };
    let deleteButtHandler = (city: string, pickedCities: Array<string>, setPickedCities: (arr: Array<string>) => void) => {
        let arr = [...pickedCities];
        arr.splice(arr.findIndex((e) => e === city), 1);
        localStorage.setItem("clientCity", arr.join(","));
        setPickedCities(arr)
    };
    let cityButtHandler = (city: string) => {
        let arr = [...pickedCities];
        if (arr.find(e => e === city)) {
            message.warning("Вы уже наблюдаете за этим городом");
        }
        else {
            arr.push(city)
            localStorage.setItem("clientCity", arr.join(","));
            message.success("Город добавлен");
            setPickedCities([...arr])
        }
    };
    let weathersBlock = locationWeather.map((e,i) => {
        return <WeatherComponent key={i} date={e.dt} temperature={e.temp} weatherDescription={e.weather[0].description} icon={e.weather[0].icon}/>
    });
    let pickedCitiesObject = pickedCities.map((e) => {
        return <WeatherObject history={history} pickedCities={pickedCities} setPickedCities={setPickedCities}
                              deleteButtHandler={deleteButtHandler} historyButtHandler={historyButtHandler} key={e}
                              city={e}/>
    });
    return (
        <>
        {locationWeather[0]?(<><h2>Погода в вашем городе</h2>{weathersBlock}</>):<p>Нет доступа к геолокации</p>}
            <StyledModal cityButtHandler={cityButtHandler} cities={props.cities} setIsModalVision={setIsModalVision}
                         isModalVision={isModalVision}/>
            {pickedCitiesObject}
            <button onClick={() => {
                setIsModalVision(!isModalVision)
            }}>Выбрать наблюдаемые города
            </button>
        </>

    )
};