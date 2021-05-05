/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion'

export default function ItemLayout({ content, i, active, squish }) {
  return (
    <motion.section
      className='timeline-item'
      animate={{
        width:active? '75vw' : '20px',
        opacity:active? 1 : .4,
        transform:squish? 'scaleY(.05)' : 'scaleY(1)'
      }}
      transition={{ ease:'easeIn', duration:1 }}
        initial={false}
      sx={{
        height:'50vh',
        border:`2px solid ${active? 'blue' : 'orange'}`,
        overflow:'hidden',
        mb:'20vh',
        flexShrink:0,
      }}>
      {JSON.stringify(content)}
    </motion.section>
  )
}
