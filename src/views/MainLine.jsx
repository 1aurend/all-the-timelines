/** @jsxImportSource theme-ui */
import {
  useRef,
  useEffect,
  useState
} from 'react'
import { disableBodyScroll } from 'body-scroll-lock'
import ItemLayout from './ItemLayout'
import createScrollamaTrigger from '../utils/createScrollamaTrigger'
import scrollama from 'scrollama'


export default function MainLine({ data }) {
  const scrollable = useRef(null)
  const [active, setActive] = useState([...Array(data.length).keys()]
    .reduce((acc, val) => {return {...acc, [val]:false}}, {})
  )

  useEffect(() => {
    // if (scrollable.current) {
    //   disableBodyScroll(scrollable.current)
    // }
  }, [])

  const items = data.map((item, i) => <ItemLayout content={item} key={i} i={i} active={active[i]}/>)
  useEffect(() => {
    const expandItem = res => {
      console.log(res)
      if (res.direction === 'down') {
        console.log('here')
        setActive(active => {return {...active, [res.index]:true}})
      }
    }
    const collapseItem = res => {
      if (res.direction === 'down') {
        setActive(active => {return {...active, [res.index]:false}})
      }
    }
    const expandItemUp = res => {
      console.log(res)
      if (res.direction === 'up') {
        console.log('here')
        setActive(active => {return {...active, [res.index]:true}})
      }
    }
    const collapseItemUp = res => {
      if (res.direction === 'up') {
        setActive(active => {return {...active, [res.index]:false}})
      }
    }
    const log = res => console.log(res)
    const enterParams = {
      id:'timeline-item',
      offset:.8,
      enter:expandItem,
      exit:collapseItemUp,
      parent:null
    }
    const exitParams = {
      id:'timeline-item',
      offset:.2,
      exit:collapseItem,
      enter:expandItemUp,
      parent:null
    }
    createScrollamaTrigger(enterParams)
    createScrollamaTrigger(exitParams)
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
        pb:'200vh',
        pt:'90vh'
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
