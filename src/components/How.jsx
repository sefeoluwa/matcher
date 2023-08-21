/* eslint-disable react/prop-types */
import { SectionWrapper } from '../hoc'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { howItWorks } from '../constants';
import { textVariant } from "../utils/motion";

const HowSteps = ({ howItWorks }) => {
  return (
    <VerticalTimelineElement 
    contentStyle={{background: '#050827', color: '#fff'}}
    icon={
      <div className="flex justify-center items-center w-full h-full bg-primary rounded-full">
        <img src={howItWorks.iconBg} alt= "steps animated arrow" className="w-[60%] h-[60%] object-contain"/>
      </div>
   }
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