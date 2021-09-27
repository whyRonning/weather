import * as React from "react";
type props={
    login:string,
    password:string,
    setLogin:(login:string)=>void,
    setPassword:(login:string)=>void,
    buttHandler:(login:string,password:string)=>void
}
export let Login = (props:props) => {
    return (
        <form>
            <input value={props.login} onChange={(e)=>{props.setLogin(e.target.value)}} type="text"/>
            <input value={props.password} onChange={(e)=>{props.setPassword(e.target.value)}} type="password"/>
            <button onClick={()=>{props.buttHandler(props.login,props.password)}}>Войти</button>
        </form>
    )
}