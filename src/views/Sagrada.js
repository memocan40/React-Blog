import React,{useState} from "react";
import {Route,Link,Switch}from "react-router-dom";
import "./sagrada.css";


export default function Sagrada(){


    return(
        <div className="sagrada">
        
        <div className="contend"><img className="bild" src="https://go2barcelona.de/images/barcelona_sagrada_familia.jpg"></img></div>

        <div className="text1">The Sagrada Familia (full name Basílica i Temple Expiatori de la Sagrada Família) is a large Roman Catholic church in Barcelona, Catalonia, Spain. It was designed by architect Antoni Gaudí (1852–1926). Although it is not finished, the church is a UNESCO World Heritage Site.[5] In November 2010 it was consecrated (dedicated to a special purpose) and made a minor basilica by Pope Benedict XVI.[6][7][8] Building of the Sagrada Familia began in 1882. Gaudi started working on it in 1883.[5] He took over the project, and changed it with his ideas on architecture and engineering. Gaudi worked on it until he died. At the time of his death in 1926, less than a quarter of the building was finished.[9] The Sagrada Família's building was slow. It needed private donations (people giving money to it). It was stopped by the Spanish Civil War—only to start again in the 1950s. Building was more than halfway done after 2010. Some of the project's biggest problems still remain.[9]</div>
        
        
        <iframe className="frame" width="560" height="315" src="https://www.youtube.com/embed/AWQje34khog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
    )
}