import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './Intro.css'
import Github from '../../img/github.png'
import Twitter from '../../img/twitter.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/vector1.png'
import Vector2 from '../../img/vector2.png'
import Mharo3 from '../../img/mharo3.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Glassesimoji from '../../img/glassesimoji.png'
import Crown from '../../img/crown.png'
import Thumbup from '../../img/thumbup.png'

export default function Intro() {
    const el= useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings:['Front End Engineer ','Front End Engineer ', 'UI/UX Designer ', 'Gardener '],
            startDelay:300,
            typeSpeed:300,
            backDelay:350,
            backSpeed:350,
            smartBackspace:true,
            showCursor:false,
            loop:true,

        })
    })
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <p id='naav'>Prathamesh Sharma</p> 
                <span className='espan-p'>I'm a <span className='espan' ref={el}> </span></span>
            </div>
            {/* <div className="i-icons">
                <img height="100px" width="100px" src={Github} alt="" />
                <img id="tw" height="150px" width="150px" src={Twitter} alt="" />
                <img height="100px" width="100px" src={LinkedIn} alt="" />
            </div> */}
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={ Vector2} alt="" />
            <img height="770px" width="630px" src={Mharo3} alt="" />
            <img id="glassImo" src={Glassesimoji} alt="" />
            <div id="floating-card-1" style={{top: '-4%', left : '68%'}} className="floating-card">
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
            </div>
            <div id="floating-card-2" style={{top: '75%', left : '-10%'}} className="floating-card">
                <FloatingDiv image={Thumbup} txt1="Best" txt2="Designer"/>
            </div>
            {/* blur divs */}
            <div className="blur" style={{background : 'rgb(238 210 255)'}}></div>
            <div className="blur" style={{
                background:'#c1f5ff',
                top :'17rem',
                width : '21rem',
                height:'11rem',
                left : '-9rem',
            }}></div>
        </div>
    </div>
  )
}
