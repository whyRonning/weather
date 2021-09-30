import React, {useState} from "react";
import {FindStroke} from "./findStroke";
import {citiesType} from "../../store/weatherReducer";
import { City } from "./city";
import styled from "styled-components";

type props = {
    className?: string,
    isModalVision: boolean,
    setIsModalVision:(arg:boolean)=>void,
    cities:citiesType,
    cityButtHandler:(city:string)=>void
}
let Cancel=styled.span`
  cursor:pointer;
  margin-left:95vw;
  margin-left:95vw;
  font-size:3vmin;
    
`;
let Block=styled.div`
    width:100%;
`;
let CitiesTitlesBlock=styled.div`
    display:grid;
    width:35vw;
    margin-left:35vw;
    grid-gap:.8vw;
    grid-template-columns:repeat(3,1fr)
`;
export let Modal = (props: props) => {
    let [findStrokeText, setFindStrokeText] = useState("");
    let [FilteredCities,setFilteredCities]=useState<Array<string>>([]);
    let cancelHandler=(setIsModalVision:(arg:boolean)=>void,setFindStrokeText:(el:string)=>void,setFilteredCities:(arg:Array<string>)=>void )=>{
        setIsModalVision(false)
        setFindStrokeText("")
        setFilteredCities([])
    }
    let changeStrokeHandler=(stroke:string,setFindStrokeText:(text:string)=>void,cities:citiesType,setFilteredCities:(filteredCity:Array<string>)=>void)=>{
        if(stroke.length>=2){
            setFilteredCities(Object.keys(cities).filter((e)=>{
                return e.toLowerCase().includes(stroke.toLowerCase())
            }))
        }
        setFindStrokeText(stroke)
    }
    let citiesTitles=FilteredCities.map((e)=>{
        return <City key={e} city={e} cityButtHandler={props.cityButtHandler}/>
    })
    return (
        <div className={props.className}>
            <Cancel onClick={()=>{cancelHandler(props.setIsModalVision,setFindStrokeText,setFilteredCities)}}>&#215;</Cancel>
            <Block>
                <FindStroke setFilteredCities={setFilteredCities} changeStrokeHandler={changeStrokeHandler} cities={props.cities} findStrokeText={findStrokeText} setFindStrokeText={setFindStrokeText}/>
                <CitiesTitlesBlock>
                    {findStrokeText.length<2?false:citiesTitles}
                </CitiesTitlesBlock>
            </Block>
        </div>
    )
}