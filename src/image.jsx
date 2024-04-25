import React from "react";
export default function Image(props){
    return <img src={props.path} style={{height:`${props.size}px`,width:`${props.size}px`}}/>
}