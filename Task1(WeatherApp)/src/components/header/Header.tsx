
import * as React from "react";
import {ReactElement} from "react";
import styled from "styled-components";
type props={
    titleOfHeader:Array<ReactElement>
}
let StHeader=styled.header<{countTitles:number}>`
    display:grid;
    align-content:center;
    justify-items:center;
    grid-template-columns:${props=>`repeat(${props.countTitles},1fr)`};
    background-color:#aa02be;
    height:5vh;
`
export let Header=(props:props)=>{
    return(
        <StHeader countTitles={props.titleOfHeader.length}>{props.titleOfHeader}</StHeader>
    )
}