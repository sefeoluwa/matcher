import React from 'react'
import { SectionWrapper }from '../hoc'
import { styles } from '../styles'
import { giphy } from '../assets'


function Hero() {

 
  return (
   <>
   <div className="hero  pt-[10vh] h-[80vh]">
   <div className='hero-container flex flex-col  items-center '>
    <h1 className={`${styles.heroHeadText} hero-text`}>Resume Matcher</h1>
    <p className={`${styles.heroSubText} hero-text text-center`}>Optimise your resume with AI for ATS and get hired!</p>
    <button className='bg-[#8A2BE2] w-[200px] h-[46px] rounded-[36px] mt-6'>Try it for free!</button>
   </div>

   <div className="m-w-[60vw] flex justify-center">
    <img src={giphy} alt="demo" className=''/>
   </div>
   </div>
   </>
  )
}

export default SectionWrapper(Hero, '')