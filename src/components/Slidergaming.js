import React from 'react'
import './slidergaming.css'

export default function Slidergaming() {

  const text=['Esports Gaming',
  'FireWork',
  'Clash OF Kings',
  'Epic Worrior',
  'Solo Royale',
  'Dark Soul',
  'Epic Worrior',
  'Solo Royale',
  'Dark Soul',
  'BloodBone']




  return (
    <>
    <div className="container7">
      <div className="minibox-cont7 anim1">
      {text.map((item,index)=>{
                return <h1 key={index}>{item}</h1>
      })}
      </div>
      <div className="minibox-cont7 anim1">
      {text.map((item,index)=>{
                return <h1 key={index}>{item}</h1>
      })}
      </div>
    </div>
    <div className="blank-line"></div>
    </>
  )
}
