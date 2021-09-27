import React from "react";
import { Link } from "react-router-dom";
type props={
    title:string,
    src:string
}
export let Title=(props:props)=>(
    <Link to={props.src}>{props.title}</Link>
)

