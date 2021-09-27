import {Dispatch, useEffect} from "react";
import { Redirect } from "react-router-dom";
import React from "react";

type props={
    logoutAC:()=>{type:string},
    dispatch: Dispatch<any>;
}
export let Logout=(props:props)=>{
    useEffect(()=>{
        props.dispatch(props.logoutAC())
    },[props])
    return <Redirect to={"/"}/>;
}