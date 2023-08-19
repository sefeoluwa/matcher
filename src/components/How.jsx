/* eslint-disable react/prop-types */
import { SectionWrapper } from '../hoc'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { howItWorks } from '../constants';
import { textVariant } from "../utils/motion";

const HowSteps = ({ howItWorks }) => {
  return (
    <VerticalTimelineElement contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight:'7px solid #232631'}}
    >
       <div>
          <img src={howItWorks.icon} alt="" />
           <h3 >{howItWorks.title}</h3>
           <p>{howItWorks.content}</p>
         </div>
       </VerticalTimelineElement>
  )
}

function How() {
  return (
    <VerticalTimeline>
    {howItWorks.map((howItWorks, index) => (
     <HowSteps key={index} howItWorks={howItWorks} />
    ))}
 </VerticalTimeline>
  )
}

export default SectionWrapper(How, '')