/** @jsxImportSource theme-ui */
import {
  useRef,
  useEffect,
  useState
} from 'react'
import ItemLayout from './ItemLayout'
import createScrollamaTrigger, {
  onTrigger
} from '../utils/createScrollamaTrigger'
import scrollama from 'scrollama'
import { orderByDate, orderByNumber } from '../utils/orderByDate'


export default function MainLine({ data }) {
  const scrollable = useRef(null)
  const [active, setActive] = useState(
    [...Array(data.length).keys()]
      .reduce((acc, val) => {return {...acc, [val]:false}}, {})
  )
  const [squish, setSquish] = useState(
    [...Array(data.length).keys()]
      .reduce((acc, val) => {return {...acc, [val]:true}}, {})
  )

  const items = orderByNumber(data)
    .map((item, i) => <ItemLayout content={item} key={i} i={i} active={active[i]} squish={squish[i]}/>)

  useEffect(() => {
    const drawerOpen = onTrigger(res => setActive(active => {return {...active, [res.index]:true}}))
    const drawerClose = onTrigger(res => setActive(active => {return {...active, [res.index]:false}}))
    const shrink = onTrigger(res => setSquish(squish => {return {...squish, [res.index]:true}}))
    const grow = onTrigger(res => setSquish(squish => {return {...squish, [res.index]:false}}))

    const activePaneBottom = {
      id:'timeline-item',
      offset:.8,
      enter:drawerOpen('down'),
      exit:drawerClose('up'),
      parent:null
    }
    const activePaneTop = {
      id:'timeline-item',
      offset:.2,
      enter:drawerOpen('up'),
      exit:drawerClose('down'),
      parent:null
    }
    createScrollamaTrigger(activePaneTop)
    createScrollamaTrigger(activePaneBottom)

    const topPileUp = {
      id:'timeline-item',
      offset:.05,
      enter:grow('up'),
      exit:shrink('down'),
      parent:null
    }
    const bottomPileUp = {
      id:'timeline-item',
      offset:.95,
      enter:grow('down'),
      exit:shrink('up'),
      parent:null
    }
    createScrollamaTrigger(topPileUp)
    createScrollamaTrigger(bottomPileUp)

    return () => scrollama.destroy()
  }, [])

  return (
    <>
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
    <div
      className='timeline-items-container'
      ref={scrollable}
      sx={{
        display:'flex',
        height:'100vh',
        flexDirection:'column',
        justifyContent:'flex-start',
        position:'absolute',
        left:'20vw',
        top:0,
        pb:'150vh',
        pt:'25vh'
      }}>
      {items}
    </div>
    </>
  )
}
