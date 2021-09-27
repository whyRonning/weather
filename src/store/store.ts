import {combineReducers, createStore } from "redux";
import {weatherReducer} from "./weatherReducer";
import {loginReducer} from "./loginReducer";
export type ActionTypes<T extends {[keys:string]:(...args:any)=>any}>=ReturnType<T extends {[key:string]:infer U}?U:never>
export type GlobalState=ReturnType<typeof RootReducer>;
let RootReducer=combineReducers({weatherReducer,loginReducer});
export let store=createStore(RootReducer);