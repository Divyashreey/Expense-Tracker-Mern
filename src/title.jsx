import React, { useState } from 'react'

export default function Title({title}) {
    const [isLower,setIsLower]=useState(true);
  
  return (
    <div>
     <button
    onClick={() => {
      setIsLower(prev=>!prev);
     
    }}
  >
    UpperCase
  </button>
     <p>{isLower?title.toLowerCase():title.toUpperCase()}</p>
    </div>
  
  )
}
