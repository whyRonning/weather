import  React from "react";
import styled from "styled-components";
let StyledFooter=styled.footer`
    height:5vh;
    width:100%;
    text-align:center;
    background-color:#b9bcbd;
`
export let Footer=()=>(
    <StyledFooter>
        <p>Погодное приложение.Сделано в 2021г.</p>
    </StyledFooter>
)