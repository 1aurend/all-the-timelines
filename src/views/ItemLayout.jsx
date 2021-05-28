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
      transition={{ ease:'easeIn', duration:.5 }}
        initial={false}
      sx={{
        height:'50vh',
        overflow:'hidden',
        mb:'20vh',
        flexShrink:0,
        fontFamily:'sans-serif',
        pl:'5vw'
      }}>
      <div
        className='item-heading'
        sx={{
          display:'flex',
          justifyContent:'flex-start',
          alignItems:'flex-end'
        }}>
        <h1
          sx={{
            pr:'2vw',
            fontSize:'3.5rem',
            fontWeight:'normal',
            m:0,
            lineHeight:'3.5rem'
          }}>
          {content.headline}
        </h1>
        <p
          sx={{
            mb:'.5rem',
            fontSize:'.9rem'
          }}>
          {content.abstract}
        </p>
      </div>
      <div
        className='item-body'
        sx={{
          border:'2px solid black',
          display:'flex',
          justifyContent:'flex-start',
          p:'3%',
          minHeight:'25vh',
          ':after': {
            	right:'93.5%',
            	top:'40%',
            	border:'solid transparent',
            	content:'""',
            	height: 0,
            	width: 0,
            	position:'absolute',
              borderColor:'rgba(255, 255, 255, 0)',
            	borderRightColor:'#fff',
            	borderWidth:'40px',
            	marginTop:'-40px',
          },
          ':before': {
            	right:'93.5%',
            	top:'40%',
            	border:'solid transparent',
            	content:'""',
            	height: 0,
            	width: 0,
            	position:'absolute',
              borderColor:'rgba(0, 0, 0, 0)',
            	borderRightColor:'black',
            	borderWidth:'43px',
            	marginTop:'-43px',
          }
        }}>
        <div
          className='item-detail'
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            height:'90%',
            width:'40%',
            flexShrink:0,
            pt:'5%',
            pb:'5%'
          }}>
          <h3
            sx={{
              fontWeight:'normal',
              mt:0,
              mb:'1.5rem',
              fontSize:'1.5rem'
            }}>
            Detail
          </h3>
          <p
            sx={{
              m:0,
              fontSize:'.9rem'
            }}>
            {content.bodyText}
          </p>
        </div>
        <img
          src={content.mediaLink}
          alt='kitten'
          sx={{
            width:'30%',
            height:'auto',
            ml:'3%',
            mb:'1vw',
            objectFit:'contain'
          }}/>
        <p
          sx={{
            ml:'3%',
            mt:0,
            fontSize:'.75rem'
          }}>
          {content.mediaCaption}
        </p>
      </div>
    </motion.section>
  )
}
