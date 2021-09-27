import {connect, ConnectedProps} from "react-redux";
import React, {useState} from "react";
import {Login} from "./login";
import {actionCreators} from "../../store/loginReducer";

let LoginWrapper=(props:propsType)=>{
    let [login,setLogin]=useState("");
    let [password,setPassword]=useState("");
    let buttHandler=(login:string,password:string)=>{
        props.checkLoginDataAC(login,password)
    };
    return(
        <Login buttHandler={buttHandler} login={login} setLogin={setLogin} setPassword={setPassword} password={password}/>
    )
};
let LoginConnector=connect(null,{checkLoginDataAC:actionCreators.checkLoginDataAC});
type propsType=ConnectedProps<typeof LoginConnector>
export let LoginContainer=LoginConnector(LoginWrapper);