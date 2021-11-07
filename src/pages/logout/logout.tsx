import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import React from "react";

type props = {
  logoutAC: () => void;
};
export let Logout = (props: props) => {
  useEffect(() => {
    props.logoutAC();
  }, [props]);
  return <Redirect to={"/"} />;
};
