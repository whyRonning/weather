import { actionTypes } from "./store";

type dataType = {
  loginData: { login: string; password: string };
  isAuth: boolean;
};
let data: dataType = {
  loginData: { login: "Admin", password: "12345" },
  isAuth: false,
};
type localActionsTypes = actionTypes<typeof actionCreators>;
export let loginReducer = (state = data, action: localActionsTypes) => {
  switch (action.type) {
    case "checkLoginData": {
      return { ...state, isAuth: true };
    }
    case "auth": {
      localStorage.setItem("auth", "true");
      return { ...state, isAuth: true };
    }
    case "logout": {
      localStorage.setItem("auth", "false");
      return { ...state, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
export let actionCreators = {
  authAC: () =>
    ({
      type: "auth",
    } as const),
  logoutAC: () =>
    ({
      type: "logout",
    } as const),
  checkLoginDataAC: (login: string, password: string) =>
    ({
      type: "checkLoginData",
      login,
      password,
    } as const),
};
