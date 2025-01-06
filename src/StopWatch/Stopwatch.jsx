import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time,setTime]=useState(5104)
    const [isActive,setIsactive]=useState(false);
    useEffect(()=>{
        let interval;
        if(isActive){
            interval=setInterval(()=>{
                setTime((time)=>{
                    if(time > 0){
                       return time - 1
                    }else{
                        setIsactive(false)
                        return 0
                    }
                })
            },1000)
        }
        return ()=>clearInterval(interval)
    },[isActive]);

    const formatTime=(time)=>{
        const hours=Math.floor(time/3600).toString().padStart(2,"0")
        const minutes=Math.floor((time%3600)/60).toString().padStart(2,"0")
        const second=Math.floor(time%60).toString().padStart(2,"0")
        return `${hours}:${minutes}:${second}`
    }   


    const handleStart = () => {
        setTime(5400);
        setIsactive(true);
      };
      const handlePauseResume = () => {
        setIsactive((prev) => !prev);
      };
      const handleStop = () => {
        setIsactive(false);
        setTime(0);
      };
  return (
       <div>
      <h1>Stopwatch</h1>

      <p>{formatTime(time)} </p>

      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>
        {isActive ? 'Pause' : 'Resume'}
      </button>

      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Stopwatch