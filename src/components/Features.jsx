import React from 'react'
import { motion } from "framer-motion";
import "react-vertical-timeline-component";
import { SectionWrapper } from '../hoc';
import { features } from '../constants'

function Features() {
  return (
    <>
    <div className="heading">
      <h2>Powerful features to help you pass the screening stage amd get hired faster.</h2>
    </div>
    <div className="">
      {features.map((feat) => (
        <div className="" key={feat.title}>
          <img src={feat.icon} alt="" />
          <h3>{feat.title}</h3>
          <p>{feat.content}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Features, '')