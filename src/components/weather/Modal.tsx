import React, {useState} from "react";
import {FindStroke} from "./findStroke";
import {citiesType} from "../../store/weatherReducer";
import { City } from "./city";

type props = {
    className?: string,
    isModalVision: boolean,
    setIsModalVision:(arg:boolean)=>void,
    cities:citiesType,
    cityButtHandler:(city:string)=>void
}
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
            <span onClick={()=>{cancelHandler(props.setIsModalVision,setFindStrokeText,setFilteredCities)}}>&#215;</span>
            <div>
                <FindStroke setFilteredCities={setFilteredCities} changeStrokeHandler={changeStrokeHandler} cities={props.cities} findStrokeText={findStrokeText} setFindStrokeText={setFindStrokeText}/>
                {findStrokeText.length<2?false:citiesTitles}
            </div>
        </div>
    )
}