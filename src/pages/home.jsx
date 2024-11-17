import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css"

export default function Home() {
    const [count, setCount] = useState(0)
    const [animate, setAnimate] = useState(false)
    const handleIncrement = ()=>{
        startAnimation()
        setCount((prevValue)=>{
            return prevValue + 1
        })
    }
    const startAnimation = ()=>{
        setAnimate(true)
    }
    const stopAnimation = ()=>{
        setAnimate(false)
    }
    return (
        <>
            <Navbar title={"SNACKUS"} />
            <h1>Home Page</h1>
            <p id="center-text" className={animate ? "scale-text" : ""} onAnimationEnd={stopAnimation}>{count}</p>
            <div id="button" onClick={handleIncrement}>+</div>
            <div id="button" className="minus-button" onClick={handleIncrement}>-</div>
        </>
    );
}