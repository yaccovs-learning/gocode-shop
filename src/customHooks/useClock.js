import React, { useState, useEffect } from 'react'

const useClock = () => {
   const [clock, setClock ] = useState(new Date().toLocaleTimeString())
   useEffect(() => {
     const idInterval = setInterval( ()=> {
        setClock(new Date().toLocaleTimeString());
        console.log(clock);
     }, 10
     )
   
     return () => {
       clearInterval(idInterval)
     }
   }, [])
   
  return clock
}

export default useClock