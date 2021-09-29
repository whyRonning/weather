import {cities} from "./cities";

let data={
    cities:cities as citiesType
};
export type citiesType={[keys:string]:{lat:number,long:number}};
export let weatherReducer=(state=data,action:any)=>{
    switch (action.type) {
        default:{
            return state
        }
    }
}