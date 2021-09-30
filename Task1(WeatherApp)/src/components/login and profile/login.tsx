import * as React from "react";
import styled from "styled-components";
import { Titles } from "../weather/weather";

type props = {
    login: string,
    password: string,
    setLogin: (login: string) => void,
    setPassword: (login: string) => void,
    buttHandler: (login: string, password: string) => void
}
let Form=styled.div`
    display:grid;
    margin:25vh 0 0 35vw;
    width:30vw;
    background-color:#cfcfcf;
`;
let Input=styled.input`
    width:10vw;
`;
let InputsBlock=styled.div`
    text-align:center;
    margin-bottom:2vh;
`;
let Label=styled.label`
    font-size:1.7vmin;
    margin-right:1.5vw;
`;
let Butt=styled.button`
     width:12vw;
     height:4vh;
     margin:2vh 0 5vh 0;
     color:white;
     cursor:pointer;
     margin-left:9vw;
     background-color:#aa02be;
     transition:.5s ease;
     &:hover {
        background:none;
        border-color:#aa02be;
        color:#aa02be;
     }
`;
export let Login = (props: props) => {
    return (
        <Form>
            <Titles>Авторизация</Titles>
            <form>
                <InputsBlock>
                    <Label htmlFor={"login"}>Логин</Label>
                    <Input id="login" placeholder={"Введите логин"} value={props.login} onChange={(e) => {props.setLogin(e.target.value)}} type="text"/>
                </InputsBlock>
                <InputsBlock>
                    <Label htmlFor={"password"}>Пароль</Label>
                    <Input id="password" placeholder={"Введите пароль"} value={props.password} onChange={(e) => {props.setPassword(e.target.value)}} type="password"/>
                </InputsBlock>
            </form>
            <Butt onClick={() => {props.buttHandler(props.login, props.password)}}>Войти</Butt>
        </Form>
)
}