import { SectionWrapper }from '../hoc'
import { styles } from '../styles'
import { Vector } from '../assets'


function Hero() {

 
  return (
   <>
   <div className="hero  pt-[10vh] h-[80vh]">
   <div className='hero-container flex flex-col  items-center '>
    <h1 className={`${styles.heroHeadText} hero-text text-center`}>Resume Matcher</h1>
    <p className={`${styles.heroSubText} hero-text text-center`}>Optimise your resume with AI for ATS and get hired!</p>
    <button className='bg-[#8A2BE2] w-[200px] h-[46px] rounded-[36px] mt-6'>Try it for free!</button>
   </div>

   <div className="m-w-[500px] flex justify-center mt-10">
    <img src={Vector} alt="demo" className='p-10 h-[300px] w-[500px]'/>
   </div>
   </div>
   </>
  )
}

export default SectionWrapper(Hero, '')