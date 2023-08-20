import React from 'react'
import {aboutUs} from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

function Team() {
  return (
    <>
    <div className={`${styles.sectionHeadText} text-center`}>Meet The Team</div>
    
    </>
  )
}

export default SectionWrapper(Team, 'about')