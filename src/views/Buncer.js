import React,{useState} from "react";
import {Route,Link,Switch}from "react-router-dom";
import "./buncer.css";
import pic1 from "../img/pic1.jpg"



export default function Buncer(){
    let[theme,settheme]=useState("pic1");
    let[back,setback]=useState("buncer");

    const set=()=>{
        if(theme==="pic1"){settheme("pic2")}
        else if(theme==="pic2"){settheme("pic3")}
        else if(theme==="pic3"){settheme("pic4")}
        else if(theme==="pic4"){settheme("pic1")}
    }

    const background=()=>{
        if(back==="buncer"){setback("buncer1")}
        else if(back==="buncer1"){setback("buncer")}
    }
    return(
        <div className={back}>
        <button className="changer" onClick={background}>Background change</button>
            
        <div className="welcome">This is my Favorite Place in the City! <br></br>
            a chilly place and a beautifull view!</div>

        
            
          <div>  <div className={theme}></div><iframe className="buncervid" width="560" height="315" src="https://www.youtube.com/embed/Ya289vfflKM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </div> 
            <div><button className="button" onClick={set}>Next</button></div>
            <div> <p className="info">Turó de la Rovira is a hill overlooking Barcelona with an altitude of 262m. It has been continually occupied, in one form or another, from the Iberian era (4th century B.C) to present. During the Spanish Civil War (1936–1939) the Republican anti-air defence authority (DECA) found that the hill was the most suitable place to build its anti-aircraft battery, which was instrumental in republican efforts to defend Barcelona. Post Spanish Civil-War the then abandoned military structures were used as shelters and the shanty town of Els Canons, which survived into the ‘90s, sprung up around them. Also during this time, water tanks and communication towers were installed, some of which can still be seen to this day.</p></div>
        </div>
    )
}