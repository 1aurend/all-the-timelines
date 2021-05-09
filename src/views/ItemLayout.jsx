/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion'

export default function ItemLayout({ content, i, active, squish }) {
  console.log(content.fields)
  return (
    <motion.section
      className='timeline-item'
      animate={{
        width:active? '75vw' : '20px',
        opacity:active? 1 : .4,
        transform:squish? 'scaleY(.05)' : 'scaleY(1)'
      }}
      transition={{ ease:'easeIn', duration:.5 }}
        initial={false}
      sx={{
        height:'50vh',
        overflow:'hidden',
        mb:'20vh',
        flexShrink:0,
      }}>
      <h2
        sx={{
          pl:'3vw'
        }}>
        {content.fields.Headline}
      </h2>
      <p
        sx={{
          pl:'3vw'
        }}>
        {content.fields.People}
      </p>
      <div>
        <img
          src={content.fields.MediaLink}
          alt='kitten'
          sx={{
            width:'40%',
            float:'left',
            mr:'1vw',
            mb:'1vw'
          }}/>
        <p
          sx={{
            pl:'3vw',
            pt:'4vw'
          }}>
          {content.fields.Text}
        </p>
      </div>
    </motion.section>
  )
}
