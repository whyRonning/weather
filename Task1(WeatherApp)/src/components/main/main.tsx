import React from "react";
import styled from "styled-components";
let MainPng=styled.img`
    width:40%;
`;
let MainBlock=styled.div`
    text-align:center;
`;
let Title=styled.h1`
    font-size:3vmin;
    margin-bottom:5vh;
`;
export let Main = () => {
    return (
        <MainBlock>
            <Title>Главная</Title>
            <p>Данное приложение предназначено для отображения погоды в разных городах</p>
            <MainPng src={"./mainPng.jpg"} alt=""/>
        </MainBlock>
    )
};