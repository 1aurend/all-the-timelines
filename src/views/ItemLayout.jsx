/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion'

export default function ItemLayout({ content, i, active }) {
  return (
    <motion.section
      className='timeline-item'
      animate={{
        width:active? '75vw' : '20px',
        opacity:active? 1 : .4
      }}
      transition={{ ease:'easeIn', duration:1 }}
        initial={false}
      sx={{
        height:'50vh',
        border:`2px solid ${active? 'blue' : 'orange'}`,
        overflow:'hidden',
        mb:'20vh',
        flexShrink:0
      }}>
      <div
        id='circle'
        sx={{
          height:'3vw',
          width:'3vw',
          borderRadius:'50%',
          bg:'white',
          border:'1px solid black',
          display:'inline-block',
          ml:'-3vw'
        }}></div>
      {JSON.stringify(content)}
    </motion.section>
  )
}
