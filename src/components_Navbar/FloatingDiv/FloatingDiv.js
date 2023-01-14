import React from 'react'
import './FloatingDiv.css'


export default function FloatingDev({image, txt1, txt2}) {
  return (
    <div className="floatingdev">
        <img src={image} alt="" />
        <span >
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}
