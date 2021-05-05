/** @jsxImportSource theme-ui */
import {
  useRef,
  useEffect,
  useState
} from 'react'
import { disableBodyScroll } from 'body-scroll-lock'
import ItemLayout from './ItemLayout'
import createScrollamaTrigger, {
  onTrigger
} from '../utils/createScrollamaTrigger'
import scrollama from 'scrollama'


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

  useEffect(() => {
    // if (scrollable.current) {
    //   disableBodyScroll(scrollable.current)
    // }
  }, [])

  const items = data.map((item, i) => <ItemLayout content={item} key={i} i={i} active={active[i]} squish={squish[i]}/>)

  useEffect(() => {
    const drawer = onTrigger(res => setActive(active => {return {...active, [res.index]:!active[res.index]}}))
    const shrink = onTrigger(res => setSquish(squish => {return {...squish, [res.index]:!squish[res.index]}}))

    const activePaneBottom = {
      id:'timeline-item',
      offset:.8,
      enter:drawer('down'),
      exit:drawer('up'),
      parent:null
    }
    const activePaneTop = {
      id:'timeline-item',
      offset:.2,
      enter:drawer('up'),
      exit:drawer('down'),
      parent:null
    }
    createScrollamaTrigger(activePaneTop)
    createScrollamaTrigger(activePaneBottom)

    const topPileUp = {
      id:'timeline-item',
      offset:.05,
      enter:shrink('up'),
      exit:shrink('down'),
      parent:null
    }
    const bottomPileUp = {
      id:'timeline-item',
      offset:.95,
      enter:shrink('down'),
      exit:shrink('up'),
      parent:null
    }
    createScrollamaTrigger(topPileUp)
    createScrollamaTrigger(bottomPileUp)

    return () => scrollama.destroy()
  }, [])

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
        top:0,
        pb:'100vh',
        pt:'100vh'
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
