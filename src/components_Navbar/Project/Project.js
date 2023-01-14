import React from 'react'
import './Project.css'

export default function project() {
  return (
    <main className='container-project'>
        <h2 className="about-first fdd">Project</h2>
        <h1 className="about-first rdd-project ">SOMETHING I'VE BUILT</h1>
        <div className='row-project'>

                <a href="https://notepad-app-by-pmsharma.netlify.app/">
                    <section className='section-project'>
                        <p className='text-project-p'>
                            <h3 className='text-project'>NotePad APP</h3> 
                            Easier notetaking than ever before! Create, open, and save text files with Notepad
                        </p> 
                    </section>
                </a>
                <a href="https://textutilstext.netlify.app/">
                    <section className='section-project'>
                        <p className='text-project-p'>
                            <h3 className='text-project'>TextUtils</h3>
                            Check your Blog post before posting! Correct readable blog and make more efficient by using this Tool 
                        </p>
                    </section>
                </a>
               
               {/* <section className='section-project'>
                    <img className='image-project' src={} alt="" />
                    <h3 className='text-project'>JAVASCRIPT</h3>
               </section>
               <section className='section-project'>
                    <img className='image-project' src={} alt="" />
                    <h3 className='text-project'>REACT.js</h3>
               </section>
               <section className='section-project'>
                    <img className='image-project' src={} alt="" />
                    <h3 className='text-project'>C Language</h3>
               </section>
               <section className='section-project'>
                    <img className='image-project' src={} alt="" />
                    <h3 className='text-project'>PYTHON</h3>
               </section>
               <section className='section-project'>
                    <img className='image-project' src={} alt="" />
                    <h3 className='text-project'>FIGMA</h3>
               </section> */}
            </div>

    </main>
      
    
  )
}
