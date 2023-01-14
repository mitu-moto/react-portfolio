import React from 'react'
import './Resume.css'

import  My_Profile from '../../img/my_profile.png'


export default function Resume() {
  return (
    <main className='container'>
        
          <section className='profile'>
            <div className="left">
                <div className="avatar_block"> 
                    <img id='coco' src={My_Profile} alt="" />
                </div>
                <div>
                    <h2>Prathamesh Sharma</h2>
                    <p className="cd-headline loading_bar">
                        <span className="cd-words-warpper">
                            <b className="is-visible">Software Developer</b>
                        </span>
                    </p>
                </div>
            </div>
            <div className="right">
                <ul className="contact">
                    <li>
                        <i className='uil uil-phone-volume'></i>
                        <strong>Phone :</strong> +91 7709928673
                    </li>
                    <li>
                        <i className="uil uil-envelope"></i>
                        <strong>Email :</strong> thepmsharma1@gmail.com
                    </li>
                </ul>
                <ul className='socials'>
                    <li>
                        <a href="https://www.linkedin.com/in/the-pm-sharma/">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://mobile.twitter.com/THE_PM_Sharma">
                            <i className="uil uil-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mitu-moto">
                            <i className="uil uil-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
          </section>

        
        <section className="about-resume">
            <a href="/"><button className='about-resume-button'>Download Resume</button></a>
            {/* <h1 className="section-heading-1">About Us!</h1>
            <div className="content">
                <div className="left">
                    <p>A full stack Developer, a self-led learner, and a software enthusiast who loves to build products and team player. Besides Developing, I enjoy reading technical blogs I am a person with clear goals to achieve and will work for them no matter what.
                    </p>
                    <button className='about-resume-button'>Download Resume</button>
                </div>
                <div className="right">
                    <p>
                        <span>Name</span>
                        <span>Prathamesh Sharma</span>
                    </p>
                    <p>
                        <span>Date of Brith</span>
                        <span>20-07-2000</span>
                    </p>
                    <p>
                        <span>Language</span>
                        <span>English, Hindi, Marathi</span>
                    </p>
                    <p>
                        <span>Nationlity</span>
                        <span>Indian</span>
                    </p>
                    <p>
                        <span>Interest</span>
                        <span>Tech, Gardening</span>
                    </p>
                </div>
            </div> 
        </div>*/}
            </section >
            <section className="skills">
                <h1 className='section-heading-1'>Education & Skills</h1>
                <div className="content">
                <div className="left">
                    <div className="inner__left">
                        <div className="heading">
                            <i className="uil uil-graduation-cap"></i>
                            <h5>Education</h5>
                        </div>
                        <div className="timeline_wrapper">
                            <div className="item">
                                <p>Aug '19 - Jul '22</p>
                                <p className='center'>DKTE's Textile And Engineering Institute</p>
                                <p>B.Tech in Mechanical Engineering</p>
                            </div>
                            <div className="item">
                                <p>Aug '16 - Jun '19</p>
                                <p className='center'>DKTE's YCP</p>
                                <p>Diploma in Mechanical Engineering</p>
                            </div>
                            <div className="item">
                                <p>Jun '15 - Mar '16</p>
                                <p className='center'>Saraswati Highschool</p>
                                <p>Secondary School Certificate</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__right">
                        <div className="heading">
                            <i className="uil uil-suitcase-alt"></i>
                            <h5>Experience</h5>
                        </div>
                        <div className="timeline_wrapper">
                            <div className="item">
                                <p>Jun '22 -current</p>
                                <p className='center'>Front End Mentoring, Doubt Solving</p>
                                <p>Devsnest Ed-Tech</p>
                            </div>
                            <div className="item">
                                <p>Aug '22 - Oct '22</p>
                                <p className='center'>Android development</p>
                                <p>SmartInternz</p>
                            </div>
                            <div className="item">
                                <p>Jan '21 - Feb '21</p>
                                <p className='center'>Mechanical Intern</p>
                                <p>Blue Star Automobiles</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="skills__wrapper">
                        <div className="skill-box">
                            <h4>HTML & CSS</h4>
                            <div className="progress_warp">
                                <span data-percent='78' className="progress_bar" id='a'>
                                    <span className="tooltip" >78%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h4>JAVASCRIPT</h4>
                            <div className="progress_warp">
                                <span data-percent='72' className="progress_bar" id='b'>
                                    <span className="tooltip" >72%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h4>REACT</h4>
                            <div className="progress_warp">
                                <span data-percent='53' className="progress_bar" id='c'>
                                    <span className="tooltip" >53%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h4>PYTHON</h4>
                            <div className="progress_warp">
                                <span data-percent='61'  className="progress_bar" id='d'>
                                    <span className="tooltip" >61%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h4>Google Cloud</h4>
                            <div className="progress_warp">
                                <span data-percent='59' className="progress_bar" id='e'>
                                    <span className="tooltip" >59%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
          
    </main>  
   )                     
//    const bars = document.querySelectorAll('.progress_bar');

//     bars.forEach(function(bar){
//        let percentage = bar.dataset.percent;
//        let tooltip =bar.children[0];
//        tooltip.innerText = percentage + '%';
//        bars.style.width = percentage + '%';
//     })


}
