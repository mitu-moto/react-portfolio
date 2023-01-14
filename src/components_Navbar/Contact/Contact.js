import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <main className='container-contact'>
     <h2 className="about-first fdd">Contact</h2>
        <h1 className="about-first rdd-contact ">CONTACT ME</h1>

<div className='row-contact'>
               <section className='section-contact'>
               <i className="uil uil-map-marker "></i>
               <p className='text-contact-p'>
                            <h3 className='text-contact'>My Address</h3> 
                            6-B Venkatesh Colony,Ichalkaranji
                        </p>
               </section>
               <section className='section-contact'>
               <i className="uil uil-share-alt"></i>
               <p className='text-contact-p'>
                            <h3 className='text-contact'>Social Profiles</h3> 
                            <a href="https://mobile.twitter.com/THE_PM_Sharma"><i className="uil uil-twitter h3i"></i></a>
                            <a href="https://github.com/mitu-moto"><i className="uil uil-github h3i"></i></a>
                            <a href="https://www.instagram.com/prathmeshm_sharma/"><i className="uil uil-instagram h3i"></i></a>
                            <a href="https://www.linkedin.com/in/the-pm-sharma/"><i className="uil uil-linkedin h3i"></i></a>
                        </p>
               </section>
               <section className='section-contact'>
               <i className="uil uil-envelope"></i>
               <p className='text-contact-p'>
                            <h3 className='text-contact'>Email Me</h3> 
                            thepmsharma1@gmail.com 
                        </p>
               </section>
               <section className='section-contact'>
               <i className="uil uil-phone-volume"></i>
               <p className='text-contact-p'>
                            <h3 className='text-contact'>Calendly</h3> 
                            <a href="https://calendly.com/thepmsharma"> Book a slot</a> 
                        </p>
               </section>
            
               <section className='section-contact-2'>
                   <p>
                    <h1>GET IN TOUCH</h1>
                         I am constantly looking for new opportunities in industry, I am willing to work in the field of web-development, software development and UI/UX designing.
                    </p>
                     
               </section>
               <a href="mailto:thepmsharma1@gmail.com"><button className='btn-contact'>Contact me</button></a>
               </div>
               
                     
               
    </main>
  )
}
