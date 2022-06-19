import React,{useEffect, useState} from 'react'
function Compteur(){
    const [timer, setTimer]= useState(0);
    useEffect(()=>{
    const intervalID = setInterval(()=>{setTimer(timer=>timer+1)},1000) 
    return()=>{
        clearInterval(intervalID); 
    }},[])
   
    return(
        <div>
            <p>Chrono: {timer} s</p>
        </div>
    );
}
export default Compteur