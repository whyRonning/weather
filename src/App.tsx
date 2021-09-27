import React, {Dispatch, useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {WeatherContainer} from "./components/weather/weatherContainer";
import {HeaderContainer} from "./components/header/headerContainer";
import {Main} from "./components/main/main";
import {LoginContainer} from "./components/login and profile/loginContainer";
import {actionCreators} from "./store/loginReducer";
import { Logout } from './components/login and profile/logout';
import {Profile} from "./components/login and profile/profile";

type props = {
    dispatch: Dispatch<any>,
    isAuth:boolean,
    login:string
}
let App = (props: props) => {
    let dispatch=props.dispatch;
    useEffect(() => {
        if (localStorage.getItem("auth") === "true") {
          dispatch(actionCreators.authAC())
        }else{
          localStorage.setItem("auth","false")
        }
    }, [dispatch]);
    return (
        <div>
            <HeaderContainer/>
            <main>
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/profile"} component={()=><Profile login={props.login} isAuth={props.isAuth}/>}/>
                    <Route exact path={"/login"} component={LoginContainer}/>
                    <Route exact path={"/weather"} component={WeatherContainer}/>
                  <Route exact path={"/logout"} component={()=><Logout dispatch={dispatch} logoutAC={actionCreators.logoutAC}/>}/>
                    <Route> <Redirect to="/"/></Route>
                </Switch>
            </main>
        </div>
    )
};

export default App;
