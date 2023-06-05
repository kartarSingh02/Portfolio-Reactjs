import React from 'react';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


// const ServiceCard = ({index,title,icon}) => {
//   return(
//     <p>{service.title}</p>
//   )
// }

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a highly motivated and driven individual, I am always eager to learn new things and take on new challenges. I have a particular interest in full stack development and have been honing my skills in this area for some time
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index) =>(
          <ServiceCard key={service.title}
          index={index} {...service}/>
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(About,"about")