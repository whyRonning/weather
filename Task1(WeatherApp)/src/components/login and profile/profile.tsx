import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

type props={
    isAuth:boolean,
    login:string
}
let Block=styled.div`
    text-align:center;
`;
let Photo=styled.img`
    width:6vw;
`;
export let Profile=(props:props)=>{
    if(props.isAuth){
        return (
            <Block>
                <h2>Профиль</h2>
                <Photo src="./abstract-user-flat-1.png" alt=""/>
                <p>Логин-{props.login}</p>
            </Block>
        )
    }else {
        return <Redirect to={"/login"}/>
    }
};