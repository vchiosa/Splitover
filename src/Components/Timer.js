import React, { useEffect,useState } from 'react'
import "./animation.css"
import "./Timer.css"

export default function Timer(props) {
    const [seconds, setSeconds] = useState(0);

    const stakeTime = props.stakeTime;
    var currentTimeinSeconds = new Date().getTime() / 1000
    var differenceTimeinSeconds = Math.trunc(stakeTime - currentTimeinSeconds)
  
    var DaysRemaining = 0 //Math.trunc((differenceTimeinSeconds /60 /60/24))
    var HoursRemaining = Math.trunc((differenceTimeinSeconds /60 /60)-(DaysRemaining*24))
    var MinutesRemaining = Math.trunc((differenceTimeinSeconds /60 )-(DaysRemaining*24*60)-(HoursRemaining*60))
    var SecondsRemaining = Math.trunc((differenceTimeinSeconds )-(DaysRemaining*24*60*60)-(HoursRemaining*60*60)-(MinutesRemaining*60))
    
   

    useEffect(() => {
        let interval = null;
        
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            if(seconds===90){
              props.handleSubmit(0)
            }
          }, 1000);

        return () => clearInterval(interval);
      }, [ seconds]);
    
      console.log("seconds",seconds)

    return (
        
            <div>
            {stakeTime !=0  && differenceTimeinSeconds >0? <div>
            {/* <span>{DaysRemaining} Days     </span> */}
            {/* <span style={{color:"white",fontWeight:"bold", fontSize:"50px"}}>{HoursRemaining}h :     </span> */}
            <span className='glow'>{MinutesRemaining} :     </span>
            <span className='glow'>{SecondsRemaining}     </span>
            </div>:
            <div></div>
            }
        </div>
        
    )
}


