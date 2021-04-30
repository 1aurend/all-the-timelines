/** @jsxImportSource theme-ui */
import MainLine from './MainLine'
import ItemLayout from './ItemLayout'


export default function Layout({ data }) {
  if (!data) {
    return 'Loading...'
  }

  return (
    <main
      sx={{
        width:'100vw',
        height:'auto',
        m: 0,
      }}>
      <div
        sx={{
          height:'100vh',
          width:'20vw',
          flexShrink:0,
          bg:'orange',
          fontSize:'2em',
          position:'sticky',
          top:0,
          left:0
        }}>
        Static Title and Nav Pane
      </div>
      <MainLine data={data}/>
      <section
        id='timeline'>
        <div
          id='items-container'
          sx={{
            display:'relative',
          }}>
        </div>
      </section>
    </main>
  )
}
