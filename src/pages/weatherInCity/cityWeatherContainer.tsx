import { CityWeathers } from "./cityWeather";
import { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import React from "react";
import { CityWeatherComponent } from "../../components/weatherInCity/cityWeatherComponent";
import { message } from "antd";
let CityWeatherWrapper = (props: any) => {
  let [weather, setWeather] = useState<Array<any>>([]);
  let history = useHistory();
  useEffect(() => {
    if (props.match.params.url.length > 1) {
      fetch(
        "https://api.geotree.ru/search.php?term=" +
          props.match.params.url +
          "&level=4&oktmo_type=г,гфз",
        { method: "GET" }
      )
        .then((e) => e.json())
        .then((e) => {
          if (
            e[0]?.name_without_type.toLowerCase() ===
            props.match.params.url.toLowerCase()
          ) {
            fetch(
              "https://api.openweathermap.org/data/2.5/onecall?lat=" +
                e[0].geo_center.lat +
                "&lon=" +
                e[0].geo_center.lon +
                "&units=metric&lang=ru&appid=aebaf3b9032ed34ea070ecc08d250e76",
              { method: "GET" }
            )
              .then((e) => e.json())
              .then((e) => setWeather(e.daily))
              .catch(() => message.error("Ошибка API"));
          } else {
            history.push("/weather");
          }
        })
        .catch(() => message.error("Ошибка API"));
    } else {
      history.push("/weather");
    }
  }, [setWeather, history, props.match.params.url, props.cities]);
  let weathersBlock = weather
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
  let dailyWeather = () => {
    if (weather[0]) {
      return (
        <CityWeatherComponent
          date={weather[0].dt}
          temperature={weather[0].temp}
          weatherDescription={weather[0].weather[0].description}
          icon={weather[0].weather[0].icon}
        />
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      <CityWeathers
        dailyWeather={dailyWeather}
        weathersBlock={weathersBlock}
        city={props.match.params.url}
      />
    </>
  );
};
export let CityWeatherContainer = withRouter(CityWeatherWrapper);
