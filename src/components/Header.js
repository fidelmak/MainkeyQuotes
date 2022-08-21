// eslint-disable-next-line
import React from 'react';
import logo from '../logo.svg';

function Header(props){
  const {name, rating} = props
    return( <div>
           <div  style={{backgroundColor:"black", margin:"10px",padding:"20px",borderRadius:"20px"}}>
        
        <img src={logo} width="100" />
        <h1>{name}</h1>
        <h1>{rating}</h1>
      </div>
        </div> 
    )
       
}
export default Header;
   