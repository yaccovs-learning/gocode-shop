import React, { useState, useEffect } from 'react'

const useClock = () => {
   const [clock, setClock ] = useState(new Date().toLocaleTimeString().substring(0,5))
   useEffect(() => {
     const idInterval = setInterval( ()=> {
        setClock(new Date().toLocaleTimeString().substring(0,5));
        console.log(clock);
     }, 30000
     )
   
     return () => {
       clearInterval(idInterval)
     }
   }, [])
   
  return clock
}

export default useClock