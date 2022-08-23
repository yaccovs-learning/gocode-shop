import { useState, useEffect } from 'react'

const useClock = () => {
  const hourMinClock = () => {
    const now = new Date()
    return `${now.getHours().toString().padStart(2,0)}:${now.getHours().toString().padStart(2,0)}`
  }
   const [clock, setClock ] = useState(hourMinClock())
   useEffect(() => {
     const idInterval = setInterval( ()=> {
        setClock(hourMinClock());
        console.log(clock);
     }, 10000
     )
   
     return () => {
       clearInterval(idInterval)
     }
   }, [])
   
  return clock
}

export default useClock