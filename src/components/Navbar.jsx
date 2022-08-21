// eslint-disable-next-line
import React, {Components} from 'react'
import logo from '../logo.svg';

class Navbar extends React.Component{
   render() {
    return (
      <>
        <div  style={{backgroundColor:"black", padding:"20px",borderRadius:"20px", marginLeft:"10px"}}>
        
        <img src={logo} width="100" />
        <h1>SuperMan</h1>
        <h1>10/10</h1>
      </div>
      </>
    )
  }
}
export default Navbar