/** @jsxImportSource theme-ui */
import MainLine from './MainLine'
import ItemLayout from './ItemLayout'


export default function Layout({ data }) {
  if (!data) {
    return 'Loading...'
  }
  console.log(data)
  const items = data.map(item => <ItemLayout content={item}/>)

  return (
    <main
      sx={{
        width:'90vw',
        height:'100%',
        m: 0,
        p: '5%'
      }}>
      <header
        sx={{
          height: '35vh',
          width: '90vw',
          bg:'orange',
          fontSize: '2em'
        }}>
        Title Goes Here
      </header>
      <section
        id='timeline'>
        <MainLine/>
        <div
          id='items-container'
          sx={{
            mt:'-80vh',
            display:'relative',
            zIndex:10
          }}>
          {items}
        </div>
      </section>
    </main>
  )
}
