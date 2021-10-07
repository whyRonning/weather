import React, { useState } from "react";
import { FindStroke } from "./findStroke/findStroke";
import { City } from "./city";
import styled from "styled-components";
import { message } from "antd";

type props = {
  className?: string;
  isModalVision: boolean;
  setIsModalVision: (arg: boolean) => void;
  cityButtHandler: (city: string) => void;
};
let Cancel = styled.span`
  cursor: pointer;
  margin-left: 95vw;
  margin-left: 95vw;
  font-size: 3vmin;
`;
let Block = styled.div`
  width: 100%;
`;
let CitiesTitlesBlock = styled.div`
  display: grid;
  width: 35vw;
  margin-left: 35vw;
  grid-gap: 0.8vw;
  grid-template-columns: repeat(3, 1fr);
`;
export let Modal = (props: props) => {
  let [findStrokeText, setFindStrokeText] = useState("");
  let [cities, setCities] = useState<Array<string>>([]);
  let cancelHandler = (
    setIsModalVision: (arg: boolean) => void,
    setFindStrokeText: (el: string) => void,
    setFilteredCities: (arg: Array<string>) => void
  ) => {
    setIsModalVision(false);
    setFindStrokeText("");
    setFilteredCities([]);
  };
  let onButtonClick = (
    stroke: string,
    setCities: (city: Array<string>) => void
  ) => {
    fetch(
      "https://api.geotree.ru/search.php?term=" +
        stroke +
        "&level=4&oktmo_type=г,гфз"
    )
      .then((e) => e.json())
      .then((e) => {
        if (e[0]) {
          setCities(
            e.map((citiesArrs: any) => {
              return citiesArrs.name_without_type;
            })
          );
        } else {
          setCities([]);
        }
      })
      .catch(() => message.error("Ошибка API"));

    setFindStrokeText(stroke);
  };
  let citiesTitles = cities.map((e) => {
    return <City key={e} city={e} cityButtHandler={props.cityButtHandler} />;
  });
  return (
    <div className={props.className}>
      <Cancel
        onClick={() => {
          cancelHandler(props.setIsModalVision, setFindStrokeText, setCities);
        }}
      >
        &#215;
      </Cancel>
      <Block>
        <FindStroke
          setCities={setCities}
          onButtonClick={onButtonClick}
          findStrokeText={findStrokeText}
          setFindStrokeText={setFindStrokeText}
        />
        <CitiesTitlesBlock>{citiesTitles}</CitiesTitlesBlock>
      </Block>
    </div>
  );
};
