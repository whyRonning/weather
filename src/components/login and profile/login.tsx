import * as React from "react";

type props = {
    login: string,
    password: string,
    setLogin: (login: string) => void,
    setPassword: (login: string) => void,
    buttHandler: (login: string, password: string) => void
}
export let Login = (props: props) => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor={"login"}>Логин</label>
                    <input id="login" value={props.login} onChange={(e) => {props.setLogin(e.target.value)}} type="text"/>
                </div>
                <div>
                    <label htmlFor={"password"}>Пароль</label>
                    <input id="password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} type="password"/>
                </div>
            </form>
            <button onClick={() => {props.buttHandler(props.login, props.password)}}>Войти</button>
        </>
)
}