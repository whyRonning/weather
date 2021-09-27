import React, {useEffect, useState} from "react";
import {Header} from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {GlobalState} from "../../store/store";
import {Title} from "./title";
type props=ConnectedProps<typeof headerConnector>
let MSTP=(state:GlobalState)=>({
    auth:state.loginReducer.isAuth
})
let HeaderWrapper=(props:props)=>{
    let [pages,setPages]=useState(["На главную","Погода по городам","Профиль"]);
    let srces=['/',"/weather","/profile","/logout"]
    useEffect(()=>{
        let page=pages.slice();
        console.log(pages,props.auth)
        if(page.find((e)=>{return e==="Выйти"})&&!props.auth){
            page.splice(page.length-1,1)
            setPages(page)
        }else if(props.auth&&!page.find((e)=>{return e==="Выйти"})){
            page.splice(page.length,0,"Выйти")
            setPages(page)
        }
    },[pages,setPages,props.auth])
    let titleOfHeader=pages.map((e,i)=>{
        return <Title src={srces[i]} key={i} title={e}/>
    })

    return <Header titleOfHeader={titleOfHeader}/>
}
let headerConnector=connect(MSTP);
export let HeaderContainer=headerConnector(HeaderWrapper);