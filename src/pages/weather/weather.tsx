import React, { useEffect, useState } from "react";
import { WeatherObject } from "../../components/weather/weatherObject";
import { useHistory } from "react-router-dom";
import { Modal } from "../../components/weather/modal/modal";
import styled from "styled-components";
import { message } from "antd";
import { CityWeatherComponent } from "../../components/weatherInCity/cityWeatherComponent";
let StyledModal = styled(Modal)<{ isModalVision: boolean }>`
  top: ${(props) => (props.isModalVision ? "0vh" : "-100vh")};
  transition: top 0.8s ease, background-color 1s ease;
  position: fixed;
  background: ${(props) => (props.isModalVision ? "#cfcfcf" : "none")};
  width: 100vw;
  height: 100vh;
`;
export let DailyWeatherBlock = styled.div`
  display: grid;
  width: 12.4vw;
  margin-left: 44vw;
  justify-self: center;
`;
export let WeeklyWeatherBlock = styled.div`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(7, 1fr);
`;
export let Titles = styled.h2`
  text-align: center;
  margin-bottom: 5vh;
`;
let PickedCitiesBlock = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 2vw;
  grid-template-columns: repeat(4, 1fr);
`;
let AddCity = styled.button`
  margin: 5vh 0 3vh 0;
  height: 5vh;
  width: 25vw;
  background-color: #68e0d0;
  color: white;
  cursor: pointer;
  margin-left: 38vw;
  transition: 0.4s ease;
  &:hover {
    background: none;
    border-color: #68e0d0;
    color: #68e0d0;
  }
`;
export let Weather = () => {
  let [pickedCities, setPickedCities] = useState(() => {
    let cities = localStorage.getItem("clientCity");
    if (cities !== null && cities !== "") {
      return cities.split(",");
    } else {
      return [];
    }
  });
  let [locationWeather, setLocationWeather] = useState<Array<any>>([]);
  let [isModalVision, setIsModalVision] = useState(false);
  let history = useHistory();
  useEffect(() => {
    if (
      localStorage.getItem("clientLat") !== "null" &&
      localStorage.getItem("clientLong") !== "null"
    ) {
      let weatherOfPosition = fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          localStorage.getItem("clientLat") +
          "&lon=" +
          localStorage.getItem("clientLong") +
          "&units=metric&lang=ru&appid=aebaf3b9032ed34ea070ecc08d250e76",
        { method: "GET" }
      )
        .then((e) => e.json())
        .catch(() => message.error("Ошибка API"));
      weatherOfPosition.then((e) => setLocationWeather(e.daily));
    } else {
      setLocationWeather([]);
    }
  }, [setLocationWeather]);
  let historyButtHandler = (city: string, history: any) => {
    history.push("/weather/" + city);
  };
  let deleteButtHandler = (
    city: string,
    pickedCities: Array<string>,
    setPickedCities: (arr: Array<string>) => void
  ) => {
    let arr = [...pickedCities];
    arr.splice(
      arr.findIndex((e) => e === city),
      1
    );
    localStorage.setItem("clientCity", arr.join(","));
    setPickedCities(arr);
  };
  let cityButtHandler = (city: string) => {
    let arr = [...pickedCities];
    if (arr.find((e) => e === city)) {
      message.warning("Вы уже наблюдаете за этим городом");
    } else {
      arr.push(city);
      localStorage.setItem("clientCity", arr.join(","));
      message.success("Город добавлен");
      setPickedCities([...arr]);
    }
  };
  let weathersBlock = locationWeather
    .filter((e, i) => {
      return i !== 0;
    })
    .map((e, i) => {
      return (
        <CityWeatherComponent
          key={i}
          date={e.dt}
          temperature={e.temp}
          weatherDescription={e.weather[0].description}
          icon={e.weather[0].icon}
        />
      );
    });
  let pickedCitiesObject = pickedCities.map((e) => {
    return (
      <WeatherObject
        history={history}
        pickedCities={pickedCities}
        setPickedCities={setPickedCities}
        deleteButtHandler={deleteButtHandler}
        historyButtHandler={historyButtHandler}
        key={e}
        city={e}
      />
    );
  });
  return (
    <>
      {locationWeather[0] ? (
        <>
          <Titles>Погода в вашем городе</Titles>
          <Titles>Сегодня</Titles>
          <DailyWeatherBlock>
            <CityWeatherComponent
              date={locationWeather[0].dt}
              temperature={locationWeather[0].temp}
              weatherDescription={locationWeather[0].weather[0].description}
              icon={locationWeather[0].weather[0].icon}
            />
          </DailyWeatherBlock>
          <Titles>На неделю</Titles>
          <WeeklyWeatherBlock>{weathersBlock}</WeeklyWeatherBlock>
        </>
      ) : (
        <p>Нет доступа к геолокации</p>
      )}
      <StyledModal
        cityButtHandler={cityButtHandler}
        setIsModalVision={setIsModalVision}
        isModalVision={isModalVision}
      />
      <hr />
      <Titles>Список наблюдаемых городов</Titles>

      <PickedCitiesBlock>{pickedCitiesObject}</PickedCitiesBlock>
      <AddCity
        onClick={() => {
          setIsModalVision(!isModalVision);
        }}
      >
        Добавить город
      </AddCity>
    </>
  );
};
