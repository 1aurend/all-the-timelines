/** @jsxImportSource theme-ui */


export default function ItemLayout({ content }) {

  return (
    <article
      sx={{
        height: '50vh',
        border: '2px solid blue',
        pl: '20%',
        overflow:'hidden',
        mb:'20vh'
      }}>
      <div
        id='circle'
        sx={{
          height:'3vw',
          width:'3vw',
          borderRadius:'50%',
          bg:'white',
          border:'1px solid black',
          display:'inline-block'
        }}></div>
      {JSON.stringify(content)}
    </article>
  )
}
