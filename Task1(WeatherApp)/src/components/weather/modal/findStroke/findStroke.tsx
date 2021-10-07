import React from "react";
import styled from "styled-components";
type props = {
  findStrokeText: string;
  setFindStrokeText: (findStrokeText: string) => void;
  onButtonClick: (
    stroke: string,
    setCities: (filteredCity: Array<string>) => void
  ) => void;
  setCities: (filteredCity: Array<string>) => void;
};
let StyledInput = styled.input`
  width: 30vw;
  height: 3vh;
  border-radius: 5px;
  margin-left: 36vw;
  margin-bottom: 3vh;
`;
let Butt = styled.button`
  background-color: #63dcd1;
  width: 10vw;
  height: 4vh;
  color: white;
  cursor: pointer;
  margin-left: 2vw;
  transition: 0.4s ease;
  &:hover {
    color: white;
    border-color: #63dcd1;
    background: none;
  }
`;
export let FindStroke = (props: props) => (
  <>
    <StyledInput
      value={props.findStrokeText}
      placeholder={"Введите название города для наблюдения за погодой в нем"}
      onChange={(e) => {
        props.setFindStrokeText(e.target.value);
      }}
    />
    <Butt
      onClick={() => props.onButtonClick(props.findStrokeText, props.setCities)}
    >
      Найти
    </Butt>
  </>
);
