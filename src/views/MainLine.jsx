/** @jsxImportSource theme-ui */

export default function MainLine({ data }) {
  return (
    <div
      id='vert-line'
      sx={{
        width:'30vw',
        height:'100vh',
        position:'sticky',
        top:0,
        pl:'20vw',
        zIndex:0
      }}>
      <div
        sx={{
          width:'1.5vw',
          height:'100vh',
          bg:'black',
        }}></div>
    </div>
  )
}
