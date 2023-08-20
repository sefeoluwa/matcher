/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { features } from '../constants';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';

const FeaturesCard = () => {
  return (
    <motion.div className="featuresCardContainer flex justify-center gap-10 pt-10">
      {features.map((feat, index) => (
        <Tilt key={feat.title} className="w-full">
          <motion.div 
            options={{ 
              max:20,
              scale:1,
              speed:450
              }}
              variants={fadeIn("right", "spring", 0.2 * index, 0.75)} 
            className="features-card h-[300px]">
            <img src={feat.icon} alt="" />
            <h3 className="text-[25px] font-bold">{feat.title}</h3>
            <p className="text-[18px]">{feat.content}</p>
          </motion.div>
        </Tilt>
      ))}
    </motion.div>
  );
};






function Features() {
  return (
    <>
    <div className="heading">
      <h2 className='font-bold text-[30px]'>Powerful features to help you pass the screening stage amd get hired faster.</h2>
    </div>

    <FeaturesCard />
    </>
  )
}

export default SectionWrapper(Features, '')