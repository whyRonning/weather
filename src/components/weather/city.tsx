import React from "react";

type props = {
    city: string,
    cityButtHandler: (city:string) => void,
}
export let City = (props: props) => {
    return (
        <div>
            <p>{props.city}</p>
            <button onClick={()=>{props.cityButtHandler(props.city)}}>Добавить</button>
        </div>
    )
}