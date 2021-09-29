import React from "react";
import { Redirect } from "react-router-dom";

type props={
    isAuth:boolean,
    login:string
}
export let Profile=(props:props)=>{
    console.log(props.isAuth)
    if(props.isAuth){
        return (
            <p>Логин-{props.login}</p>
        )
    }else {
        return <Redirect to={"/login"}/>
    }
};