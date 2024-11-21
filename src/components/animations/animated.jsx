import React from 'react'
import { motion } from 'motion/react'

function Animated({ children, x, y}) {

    const initialAnimation = {
        opacity: 0,
        ...(x !== undefined && { x: x ? 50 : -50 }), 
        ...(y !== undefined && { y: y ? 50 : -50 }), 
      };

      const whileInViewAnimation = {
        opacity: 1,
        ...(x !== undefined && { x: 0 }), 
        ...(y !== undefined && { y: 0 }), 
        transition: {
          delay: 0.2,
          duration: 0.5,
          ease: 'easeIn',
        },
      };
  return (

    <motion.div
        initial={initialAnimation}
        whileInView={whileInViewAnimation}
        viewport={{ once: false, amount: .35 }}
        style={{
            display: 'inline-block', 
            maxWidth: '100%',
            overflow: 'hidden',       
          }}>

            {children}

    </motion.div>
  )
}
export default Animated