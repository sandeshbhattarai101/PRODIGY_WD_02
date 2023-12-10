import React, {useEffect, useState} from 'react'
import './stopwatch.css'

export default function Stopwatch() {
    const [time, setTime]= useState({h:0, m:0, s:0, ms:0});
    const [laps, setLaps]= useState([]); //so that every lap sits in element in array
    const[showLap, setShowLap] = useState(false);
    const[interv, setInterv]= useState();
    const[status, setStatus]= useState(1);
    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
    const run = ()=>{
        if(updatedMs === 100){
            updatedS++;
            updatedMs = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedM ===60){
            updatedH++;
            updatedM = 0;
        }
        updatedMs++;
        return setTime({h:updatedH, m:updatedM, s:updatedS, ms:updatedMs});
        
    }
    const start = () =>{
        run();
        setInterv(setInterval(run,10))
        setStatus(2)
    }
    const stop = () =>{
        clearInterval(interv);
        setStatus(1);
    }
    const reset = () =>{
    clearInterval(interv);
    setTime({h:0, m:0, s:0, ms:0});
    setStatus(1);
    setLaps([]); //clearing the elements of array

    
    }
    const handleLap = () =>{
        const lapTime = (updatedH) + ":" + (updatedM) + ":" + (updatedS) + "." + (updatedMs); 
        setLaps((value)=>[...value, lapTime])
        setShowLap(true)
        }

 

      return (
        <>
        
<div className="mainContainer">
<div className="subContainer">
    <div className='timeContainer'>

      <div className="hours">{(time.h >=10)? time.h :"0" + time.h}</div>&nbsp;:&nbsp;
      <div className="minutes">{(time.m >=10)? time.m :"0" + time.m}</div>&nbsp;:&nbsp;
      <div className="seconds">{(time.s >=10)? time.s :"0"+ time.s}</div>&nbsp;.&nbsp; 
      <div className="milliseconds">{(time.ms>=10)? time.ms :"0"+ time.ms}</div>
        </div>

        <div className="buttonContainer">
           
            <div onClick={handleLap} className="lap">Lap</div>
            <div onClick={reset} className="reset">Reset</div>

            {(status==0)?<div onClick={start} className="start">Start</div>:
            ""}
           
            {(status==1)?<div onClick={start} className="start">Start</div>:
            <div onClick={stop} className="stop">Stop</div>}   
            
        </div>

        {/* Object.keys(time) gives the the keys of object time in array format */}
        {/* Object.values(time) gives the the values of object time in array format*/}
        {/* Object.entires(time) gives the the both keys and values of object time in array format */}

           {showLap ? 
               <div className="lapContainer">               
                    <ul className='lapUl'> 
                {laps.map((lap, index) => {   
                   return(
                    <li > 
                        <span className='index'>{`Lap ${index + 1}`}</span> 
                        <span>{lap}</span> 
                    </li> 
                   )
                
            })}
            </ul> 

            </div>:''}

    </div> 
</div>

        </>
  )
}
