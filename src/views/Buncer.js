import React,{useState} from "react";
import {Route,Link,Switch}from "react-router-dom"
import "./buncer.css";
import pic1 from "../img/pic1.jpg"



export default function Buncer(){
    let[theme,settheme]=useState("pic1");

    const set=()=>{
        if(theme==="pic1"){settheme("pic2")}
        else if(theme==="pic2"){settheme("pic3")}
        else if(theme==="pic3"){settheme("pic4")}
        else if(theme==="pic4"){settheme("pic1")}
    }
    return(
        <div className="buncer">
            
        <div className="welcome">This is my Favorite Place in the City! <br></br>
            a chilly place and a beautifull view!</div>

            <div className={theme}> </div>
            <div><button className="button" onClick={set}>Next</button></div>
            <div></div>
        </div>
    )
}