/* eslint-disable react-refresh/only-export-components */
import {aboutUs} from '../constants'
import { styles } from '../styles'

function Team() {
  return (
    <>
    <section className='mb-12' id='about'> 
    <h2 className={`${styles.sectionHeadText} text-center pb-10 `}>Meet The Team</h2>

    <div className="flex justify-center gap-20 flex-wrap">
      {aboutUs.map((i) => (
        <div className="text-center" key={i.id}>
         <div className="teamImageContainer">
         <img src={i.image} alt="Team memeber photo" className='teammate'/>
         </div>
          <h3 className='text-[20px] font-bold mt-4'>{i.person}</h3>
          <p className='text-[17px]'>{i.about}</p>
        </div>
      ))}
    </div>
    </section>
    </>
  )
}

export default Team