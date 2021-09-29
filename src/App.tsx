import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {WeatherContainer} from "./components/weather/weatherContainer";
import {HeaderContainer} from "./components/header/headerContainer";
import {Main} from "./components/main/main";
import {LoginContainer} from "./components/login and profile/loginContainer";
import { Logout } from './components/login and profile/logout';
import {Profile} from "./components/login and profile/profile";
import {CityWeatherContainer} from "./components/weather/cityWeatherContainer";
type props = {
    isAuth:boolean,
    login:string,
    logoutAC:()=>void
    authAC:()=>void
}
let App = (props: props) => {
    let authAC=props.authAC;
        useEffect(()=>{
            localStorage.setItem("clientLat","null");
            localStorage.setItem("clientLong","null");
            navigator.geolocation.getCurrentPosition((e)=>{
              localStorage.setItem("clientLat",String(e.coords.latitude));
              localStorage.setItem("clientLong",String(e.coords.longitude));
            })
        });
        useEffect(() => {
            if (localStorage.getItem("auth") === "true") {
                authAC()
            }else{
              localStorage.setItem("auth","false")
            }
        }, [authAC]);
    return (
        <div>
            <HeaderContainer/>
            <main>
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/profile"} component={()=><Profile login={props.login} isAuth={props.isAuth}/>}/>
                    <Route exact path={"/login"} component={LoginContainer}/>
                    <Route exact path={"/weather"} component={WeatherContainer}/>
                    <Route exact path={"/weather/:url"} component={CityWeatherContainer}/>
                  <Route exact path={"/logout"} component={()=><Logout logoutAC={props.logoutAC}/>}/>
                    <Route> <Redirect to="/"/></Route>
                </Switch>
            </main>
        </div>
    )
};

export default App;
