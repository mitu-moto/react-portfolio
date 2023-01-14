import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  // function btnClick(){
  //   let nav= document.querySelector('#nav');
  //   nav.classList.toggle('show');
  // }
    const btnClick = () =>{
      let nav= document.querySelector('#nav');
      nav.classList.toggle('show');
      console.log('clicked');
    }
  return (
    // <div className="n-wrapper">
    //     <div className="n-left">
    //         <div className="n-name">THE_PM_Sharma</div>
    //         <span>Toggle</span>
    //     </div>
    //     <div className="n-right">
    //         <nav className="n-list">
    //             <ul>
    //                 <li>Home</li>
    //                 <li>About </li>
    //                 <li>resume</li>
    //                 <li>Project</li>
    //                 <li>Contact </li>
    //             </ul>
    //         </nav>
    //         {/* <button className="button n-button">Button</button> */}
    //     </div>
    // </div>

    
    <header>
      <div className="toggle-btn" onClick={btnClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="logo">
        <h1 id="logo-h1">THE_PM_Sharma</h1>
      </div>
        <nav id='nav'>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/about">About</Link> </li>
                <li><Link to="/resume">Resume</Link> </li>
                <li><Link to="/project">Project</Link> </li>
                <li><Link to="/contact">Contact</Link> </li>
            </ul>
        </nav>
    </header>
    
  )
  
  
}


