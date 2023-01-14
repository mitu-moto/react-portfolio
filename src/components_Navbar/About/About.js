    import React from 'react'
    import './About.css'
    import  HTML from '../../img/html.png'
    import  CSS from '../../img/css.png'
    import  JAVASCRIPT from '../../img/javascript.png'
    import  REACT from '../../img/react.png'
    import  C from '../../img/c.jpg'
    import  PYTHON from '../../img/python.png'
    import  FIGMA from '../../img/figma.png'

    export default function About() {
    return (
        <div className="about-main">
           <h2 className="about-first fdd">About</h2>
           <h2 className="about-first ab-1 sdd">LEARN MORE ABOUT ME</h2>
           <h2 className="about-first ab-1 rdd ">Front End Engineer & </h2>
           <h2 className="about-first ab-1 rdd ">UI/UX Designer</h2>
           
            <p className='para-about'>A Front End Developer, a self-led learner, and a software enthusiast who loves to build products and is a team player. Besides Developing, I enjoy reading technical blogs I am a person with clear goals to achieve and will work for them no matter What!</p>
            {/* <i class="bi bi-record-circle-fill"></i> */}
        <div className='section-class-content'>
            <div className="left">
                <p>
                    <span>Degree</span>
                    <span className='span-p-ab'>B.Tech in Mechanical</span>
                </p>
                <p>
                    <span>BrithDate</span>
                    <span className='span-p-ab'>20 july 2000</span>
                </p>
                <p>
                    <span>Phone No.</span>
                    <span className='span-p-ab'>+91 7709928673</span>
                </p>
                <p>
                    <span>Language</span>
                    <span className='span-p-ab'>English, Hindi, Marathi</span>
                </p>
                
            </div>
            <div className="right">
                <p>
                    <span>Website</span>
                    <span className='span-p-ab'>website</span>
                </p>
                <p>
                    <span>Age</span>
                    <span className='span-p-ab'>22 </span>
                </p>
                <p>
                    <span>Mail</span>
                    <span className='span-p-ab'>thepmsharma1@gmail.com</span>
                </p>
                <p>
                    <span>City</span>
                    <span className='span-p-ab'>Ichalkaranji,Maharashtra</span>
                </p>
                
            </div>

           
        </div>
            <p className='para-about'>I have completed my B.Tech from D.K.T.E Society's Textile & Engineering Institute, Ichalkaranji 2022 pass out. I am part of various technical communities like Devsnest, Google Dev Club, and more also I'm Google Cloud Enthusiast & learner.</p>
            <h3 className='know'>TECHNOLOGIES I KNOW</h3>
            <div className='row'>
               <section className='section-know'>
                    <img className='image-know' src={HTML} alt="" />
                    <h3 className='text-know'>HTML</h3>
               </section>
               <section className='section-know'>
                    <img className='image-know' src={CSS} alt="" />
                    <h3 className='text-know'>CSS</h3>
               </section>
               <section className='section-know'>
                    <img className='image-know' src={JAVASCRIPT} alt="" />
                    <h3 className='text-know'>JAVASCRIPT</h3>
               </section>
               <section className='section-know'>
                    <img className='image-know' src={REACT} alt="" />
                    <h3 className='text-know'>REACT.js</h3>
               </section>
               <section className='section-know'>
                    <img className='image-know' src={C} alt="" />
                    <h3 className='text-know'>C Language</h3>
               </section>
               <section className='section-know'>
                    <img className='image-know' src={PYTHON} alt="" />
                    <h3 className='text-know'>PYTHON</h3>
               </section>
               <section className='section-know'>
                    <img className='image-know' src={FIGMA} alt="" />
                    <h3 className='text-know'>FIGMA</h3>
               </section>
            </div>
        
        </div>
    
    )
    }

