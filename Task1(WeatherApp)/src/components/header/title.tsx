import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
type props = {
  title: string;
  src: string;
};
let StLink = styled(Link)`
  color: white;
  transition: margin-left 0.5s ease, color 1s ease;
  &:after {
    position: absolute;
    content: ">";
    transition: margin-left 0.5s ease, opacity 0.2s ease;
    margin-left: -1vw;
    opacity: 0;
  }
  &:before {
    position: absolute;
    transition: margin-left 0.5s ease, opacity 0.2s ease;
    margin-left: 1vw;
    content: "<";
    opacity: 0;
  }
  &:hover {
    color: #5aff19;
    &:after {
      position: absolute;
      margin-left: 0.5vw;
      opacity: 1;
    }
    &:before {
      position: absolute;
      opacity: 1;
      margin-left: -1vw;
    }
  }
`;
export let Title = (props: props) => (
  <StLink to={props.src}>{props.title}</StLink>
);
