/** @jsxImportSource theme-ui */
import {
  useRef,
  useEffect,
  useState
} from 'react'
import { disableBodyScroll } from 'body-scroll-lock'
import ItemLayout from './ItemLayout'
import createScrollamaTrigger from '../utils/createScrollamaTrigger'

export default function MainLine({ data }) {
  const scrollable = useRef(null)
  const [active, setActive] = useState(Array
    .from('false'.repeat(data.length))
    .reduce((acc, val, i) => {return {...acc, [i]:val}}, {})
  )

  useEffect(() => {
    // if (scrollable.current) {
    //   disableBodyScroll(scrollable.current)
    // }
  }, [])

  const items = data.map((item, i) => <ItemLayout content={item} key={i} i={i}/>)
  useEffect(() => {
    const expandItem = res => {
      console.log('out here')
      if (res.direction === 'down') {
        console.log('here')
        setActive({...active, [res.index]:true})
      }
    }
    const enterParams = {
      id:'timeline-item',
      offset:.65,
      enter:expandItem,
      parent:scrollable.current
    }
    createScrollamaTrigger(enterParams)
  }, [active])

  console.log(active)

  return (
    <>
    <div
      className='timeline-items-container'
      ref={scrollable}
      sx={{
        display:'flex',
        height:'100vh',
        flexDirection:'column',
        justifyContent:'flex-start',
        position:'absolute',
        left:'21.5vw',
        top:0
      }}>
      {items}
    </div>
      <div
        sx={{
          width:'1.5vw',
          height:'100vh',
          bg:'black',
          position:'fixed',
          left:'20vw',
          top:0
        }}>
      </div>
    </>
  )
}
