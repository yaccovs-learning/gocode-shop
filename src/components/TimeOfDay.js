import React from 'react'

const TimeOfDay = () => {
    const date = new Date();
    const hour = date.getHours();
    let nameTimeOfDay;

    if (hour >= 6 && hour < 12) {
        nameTimeOfDay = 'morning';
    } else if (hour >= 12 && hour < 13) {
        nameTimeOfDay = 'noon';
    } else if (hour >= 13 && hour < 17) {
        nameTimeOfDay = 'afternoon';
    } else if (hour >= 17 && hour < 20) {
        nameTimeOfDay = 'evening';
    } else {
        nameTimeOfDay = 'night';
    }
  return (
    <h1>nameTimeOfDay: {nameTimeOfDay}</h1>
  )
}

export default TimeOfDay