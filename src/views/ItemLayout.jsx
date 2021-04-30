/** @jsxImportSource theme-ui */


export default function ItemLayout({ content, i }) {

  return (
    <section
      className='timeline-item'
      sx={{
        height: '50vh',
        border: '2px solid orange',
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
    </section>
  )
}
