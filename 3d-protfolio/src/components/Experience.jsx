import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles'
import {experiences} from '../constants'
import {SectionWraper} from '../hoc'
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done far</p>
        <h2 className={styles.sectionHeadText}>
          Work Experience</h2>
      </motion.div>
  )
}

export default SectionWraper(Experience, 'work')