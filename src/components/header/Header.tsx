
import * as React from "react";
import {ReactElement} from "react";
type props={
    titleOfHeader:Array<ReactElement>
}
export let Header=(props:props)=>{
    return(
        <header>{props.titleOfHeader}</header>
    )
}