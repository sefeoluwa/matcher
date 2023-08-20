import {aboutUs} from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

function Team() {
  return (
    <>
    <div className={`${styles.sectionHeadText} text-center`}>Meet The Team</div>
    <div className="">
      {aboutUs.map((i) => (
        <div className="" key={i.id}>
          <img src={i.image} alt="" />
          <h3>{i.person}</h3>
          <p>{i.about}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Team, 'about')