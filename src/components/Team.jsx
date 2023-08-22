import {aboutUs} from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

function Team() {
  return (
    <>
    <section className='h-[90vh]'> 
    <h2 className={`${styles.sectionHeadText} text-center`}>Meet The Team</h2>

    <div className="flex justify-center gap-20">
      {aboutUs.map((i) => (
        <div className="" key={i.id}>
          <img src={i.image} alt="" />
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