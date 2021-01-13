import React from "react";
import {Route,Link,Switch}from "react-router-dom"
import "./buncer.css";
import pic1 from "../img/pic1.jpg"


export default function Buncer(){
    return(
        <div className="buncer">

        <div className="welcome">This is my Favorite Place in the City! <br></br>
            a chilly place and a beautifull view!</div>

            <div className="pics"> <img src={pic1}></img> </div>
        </div>
    )
}