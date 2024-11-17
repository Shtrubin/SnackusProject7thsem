import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

const Downloads = () => {
    console.log("called")
    const [timerCount,setTimerCount]= useState(0)
    const titleRef= useRef()
    useEffect(()=>{
        setTimeout(
            ()=>{
                setTimerCount(timerCount+1)
            },
            1000)
})

    const changeTitleStyle=()=>{
        titleRef.current.style='color: blue; font-size: 30px;'
    }

    const inputRef= useRef()
    
    const handleFocus=()=>{
        inputRef.current.focus()
        inputRef.current.style='background-color: rgb(112, 219, 219); height:50px'
    }
    const handleUnfocus=()=>{
        inputRef.current.blur()
        inputRef.current.style='background-color: white; height:20px '   
    }
    return (
        <>
            <Navbar />
            <h1 onClick={changeTitleStyle} ref={titleRef}>Downloads Page</h1>
            <p>TimerCount: <span style={{fontSize: "50px",color:'red'}}>{timerCount}</span></p>
            <input type="text" ref={inputRef}/>
            <br/><br/>
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleUnfocus}>UnFocus</button>
        </>
    );
}
export default Downloads