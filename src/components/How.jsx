/* eslint-disable react/prop-types */
import { SectionWrapper } from '../hoc'
import { styles } from '../styles';
import { howItWorks } from '../constants';
import { textVariant } from "../utils/motion";


function How() {
  return (
    <>
    <h2 className={`${styles.sectionHeadText} text-center`}>How it works</h2>

    <div className=" flex flex-wrap justify-between">
      {howItWorks.map((how) => (
        <div key={how.num} className='p-4'>
          <p>{how.num}</p>
          <h3 className='w-[200px]'>{how.title}</h3>
          <p className='how-content'>{how.content}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(How, '')