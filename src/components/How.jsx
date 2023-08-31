/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { SectionWrapper } from '../hoc'
import { styles } from '../styles';
import { howItWorks } from '../constants';
import { textVariant } from "../utils/motion";


function How() {
  return (
    <>
    <h2 className={`${styles.sectionHeadText} text-center mt-10 mb-10`}>How it works</h2>

    <div className=" flex flex-wrap justify-between gap-2">
      {howItWorks.map((how) => (
        <div key={how.num} className='p-4'>
          <p className='text-[#209cff]'>{how.num}</p>
          <h3 className='w-[220px] font-bold text-[19px]'>{how.title}</h3>
          <p className='how-content text-[16px]'>{how.content}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default How