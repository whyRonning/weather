import React from "react";
import styled from "styled-components";

type props = {
    city: string,
    cityButtHandler: (city:string) => void,
}
let CityBlock=styled.div`
    background-color:#68e0cf;
    text-align:center;
    height:11vh;
`;
let P=styled.p`
    margin-top:1vh;
    color:white;
`;
let Butt=styled.button`
    width:5vw;
    color:white;
    background-color:#c20acd;
`;
export let City = (props: props) => {
    return (
        <CityBlock>
            <P>{props.city}</P>
            <Butt onClick={()=>{props.cityButtHandler(props.city)}}>Добавить</Butt>
        </CityBlock>
    )
}