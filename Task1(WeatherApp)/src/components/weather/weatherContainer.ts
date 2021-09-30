import {connect} from "react-redux";
import {Weather} from "./weather";
import {GlobalState} from "../../store/store";
let MSTP=(state:GlobalState)=>({
    cities: state.weatherReducer.cities
})
export let WeatherContainer=connect(MSTP)(Weather);