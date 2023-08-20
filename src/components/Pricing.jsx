/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc"
import { plans } from "../constants"
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from "react"
import { styles } from '../styles'
import { Tilt } from 'react-tilt'



function Pricing() {

useEffect (() => {
  AOS.init({duration: 1500});
}, []);

  return (
    <>
    <div 
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
    className="top flex justify-center  mb-[7vh] mt-[4vh]"
    >
      <h2 className={`${styles.sectionHeadText} text-center`}>The right plans for the right resume.</h2>
    </div>

    <div className="bottom">
      <div className='flex justify-evenly plans flex-wrap gap-12'>
        {plans.map((plan) => (
          <Tilt  
          key={plan.title} 
          className="cardContainer "
          >
            <div 
          data-aos="flip-up"
          data-aos-duration="2000"
          className='pricingCard w-[330px] h-[441px] bg-[#F7F7FB] p-[1vw] rounded-xl flex flex-col items-center pt-10 '
          >
            <p className='text[18px] leading-[28px] tracking-[-0.56px] pb-6'>{plan.title}</p>
            <h3 className='text-white text-[50px] leading-[56px] tracking-[-1.03px] pb-6'>{plan.price}</h3>
            <ul className='flex flex-col'>
            {plan.specs.map((spec) => ( 
            <li key={spec} className='text-[#CFD4D43] text[17px] leading-[50px] tracking-[-0.53px] text-center'>{spec}</li>
          ))}
            </ul>
            <button className='text-white bg-secondary w-[285px] h-[60px] text[18px] leading-[28px] tracking-[-0.56px] font-bold rounded-[12px] mt-6' >{plan.button}</button>
          </div>
          </Tilt>
        ))}
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(Pricing, 'pricing')