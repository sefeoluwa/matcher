import React from 'react'
import { SectionWrapper }from '../hoc'
import { styles } from '../styles'


function Hero() {
  return (
   <>
   <div className='hero-container flex flex-col  items-center pt-[10vh] h-[70vh]'>
    <h1 className={`${styles.heroHeadText} hero-text`}>Resume Matcher</h1>
    <p className={`${styles.heroSubText} hero-text text-center`}>Optimise your resume with AI for ATS and get hired.</p>
    <button>Try it for free!</button>
   </div>
   </>
  )
}

export default SectionWrapper(Hero, '')