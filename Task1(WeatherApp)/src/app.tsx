import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HeaderContainer } from "./components/header/headerContainer";
import { Main } from "./pages/main/main";
import { LoginContainer } from "./pages/login/loginContainer";
import { Logout } from "./pages/logout/logout";
import { Profile } from "./pages/profile/profile";
import { CityWeatherContainer } from "./pages/weatherInCity/cityWeatherContainer";
import { Footer } from "./components/footer/footer";
import styled from "styled-components";
import { Weather } from "./pages/weather/weather";
type props = {
  isAuth: boolean;
  login: string;
  logoutAC: () => void;
  authAC: () => void;
};
let StyledTagMain = styled.main`
  min-height: 90vh;
`;
let App = (props: props) => {
  let authAC = props.authAC;
  useEffect(() => {
    localStorage.setItem("clientLat", "null");
    localStorage.setItem("clientLong", "null");
    navigator.geolocation.getCurrentPosition((e) => {
      localStorage.setItem("clientLat", String(e.coords.latitude));
      localStorage.setItem("clientLong", String(e.coords.longitude));
    });
  });
  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      authAC();
    } else {
      localStorage.setItem("auth", "false");
    }
  }, [authAC]);
  return (
    <div>
      <HeaderContainer />
      <StyledTagMain>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route
            exact
            path={"/profile"}
            component={() => (
              <Profile login={props.login} isAuth={props.isAuth} />
            )}
          />
          <Route exact path={"/login"} component={LoginContainer} />
          <Route exact path={"/weather"} component={Weather} />
          <Route
            exact
            path={"/weather/:url"}
            component={CityWeatherContainer}
          />
          <Route
            exact
            path={"/logout"}
            component={() => <Logout logoutAC={props.logoutAC} />}
          />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </StyledTagMain>
      <Footer />
    </div>
  );
};

export default App;
