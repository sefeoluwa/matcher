/* eslint-disable react-refresh/only-export-components */
import {aboutUs} from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

function Team() {
  return (
    <>
    <section className='h-[90vh]'> 
    <h2 className={`${styles.sectionHeadText} text-center`}>Meet The Team</h2>

    <div className="flex justify-center gap-20 flex-wrap">
      {aboutUs.map((i) => (
        <div className="text-center" key={i.id}>
         <div className="bg-secondary teamImageContainer">
         <img src={i.image} alt="Team memeber photo" className='teammate'/>
         </div>
          <h3>{i.person}</h3>
          <p>{i.about}</p>
        </div>
      ))}
    </div>
    </section>
    </>
  )
}

export default SectionWrapper(Team, 'about')