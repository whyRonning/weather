import { combineReducers, createStore } from "redux";
import { loginReducer } from "./loginReducer";
export type actionTypes<T extends { [keys: string]: (...args: any) => any }> =
  ReturnType<T extends { [key: string]: infer U } ? U : never>;
export type globalState = ReturnType<typeof rootReducer>;
let rootReducer = combineReducers({ loginReducer });
export let store = createStore(rootReducer);
