/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { features } from '../constants';
import { fadeIn } from '../utils/motion';
import { styles } from "../styles";

const FeaturesCard = () => {
  return (
    <motion.div className="featuresCardContainer flex justify-center gap-10 pt-10">
      {features.map((feat, index) => (
          <motion.div 
          key={feat.title}
            options={{ 
              max:20,
              scale:1,
              speed:450
              }}
              variants={fadeIn("right", "spring", 0.2 * index, 0.75)} 
            className="features-card h-auto w-full">
            <div className="featuresIcon">
            <img src={feat.icon} alt="" />
            </div>
            <h3 className="text-[25px] font-bold">{feat.title}</h3>
            <p className="text-[18px]">{feat.content}</p>
          </motion.div>
      ))}
    </motion.div>
  );
};






function Features() {
  return (
    <>
    <div className="heading">
      <h2 className={`${styles.sectionHeadText} text-center`}>Powerful features</h2>
    </div>

    <FeaturesCard />
    </>
  )
}

export default SectionWrapper(Features, '')