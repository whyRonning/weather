import { connect, ConnectedProps } from "react-redux";
import React, { useState } from "react";
import { Login } from "./login";
import { actionCreators } from "../../store/loginReducer";
import { globalState } from "../../store/store";
import { message } from "antd";
import { Redirect, useHistory } from "react-router-dom";
let MSTP = (state: globalState) => ({
  login: state.loginReducer.loginData.login,
  password: state.loginReducer.loginData.password,
});
let loginWrapper = (props: propsType) => {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let history = useHistory();
  let buttHandler = (inputLogin: string, inputPassword: string) => {
    if (inputLogin === props.login && inputPassword === props.password) {
      props.checkLoginDataAC(inputLogin, inputPassword);
      props.authAC();
      history.push("/profile");
    } else {
      message.error("Имя пользователя или пароль введены не верно");
    }
  };
  if (localStorage.getItem("auth") === "true") {
    return <Redirect to={"/profile"} />;
  } else {
    return (
      <Login
        buttHandler={buttHandler}
        login={login}
        setLogin={setLogin}
        setPassword={setPassword}
        password={password}
      />
    );
  }
};
let LoginConnector = connect(MSTP, {
  authAC: actionCreators.authAC,
  checkLoginDataAC: actionCreators.checkLoginDataAC,
});
type propsType = ConnectedProps<typeof LoginConnector>;
export let LoginContainer = LoginConnector(loginWrapper);
