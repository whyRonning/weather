import {connect, ConnectedProps} from "react-redux";
import React, {useState} from "react";
import {Login} from "./login";
import {actionCreators} from "../../store/loginReducer";
import {GlobalState} from "../../store/store";
import {message} from "antd";
import { useHistory } from "react-router-dom";
let MSTP=(state:GlobalState)=>({
    login:state.loginReducer.loginData.login,
    password:state.loginReducer.loginData.password
})
let LoginWrapper=(props:propsType)=>{
    let [login,setLogin]=useState("");
    let [password,setPassword]=useState("");
    let history=useHistory();
    let buttHandler=(inputLogin:string,inputPassword:string)=>{
        if (inputLogin===props.login && inputPassword===props.password){
            props.checkLoginDataAC(inputLogin,inputPassword)
            props.authAC();
            history.push("/profile");
        }
        else{
            message.error('Имя пользователя или пароль введены не верно')
        }

    };
    return(
        <Login buttHandler={buttHandler} login={login} setLogin={setLogin} setPassword={setPassword} password={password}/>
    )
};
let LoginConnector=connect(MSTP,{authAC:actionCreators.authAC,checkLoginDataAC:actionCreators.checkLoginDataAC});
type propsType=ConnectedProps<typeof LoginConnector>
export let LoginContainer=LoginConnector(LoginWrapper);