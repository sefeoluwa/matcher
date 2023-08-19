import React from 'react'
import { motion } from "framer-motion";
import "react-vertical-timeline-component";
import { SectionWrapper } from '../hoc';
import { features } from '../constants'

function Features() {
  return (
    <>
    <div className="heading">
      <h2 className='font-bold text-[30px]'>Powerful features to help you pass the screening stage amd get hired faster.</h2>
    </div>
    <div className="flex flex-wrap justify-around w-full">
      {features.map((feat) => (
        <div className="features-card mt-5" key={feat.title}>
          <img src={feat.icon} alt="" />
          <h3 className='text-[25px] font-bold '>{feat.title}</h3>
          <p className='text-[18px]'>{feat.content}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Features, '')