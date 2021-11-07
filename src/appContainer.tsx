import { connect } from "react-redux";
import App from "./app";
import { globalState } from "./store/store";
import { actionCreators } from "./store/loginReducer";
let MSTP = (state: globalState) => ({
  login: state.loginReducer.loginData.login,
  isAuth: state.loginReducer.isAuth,
});
export let AppContainer = connect(MSTP, {
  authAC: actionCreators.authAC,
  logoutAC: actionCreators.logoutAC,
})(App);
