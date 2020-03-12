import React from 'react';
//import {Col} from 'reactstrap'

const Card = props => {

console.log(props)

return (

   // <Col xs="8" md="4" xl="4">

   <div className = "Char">
     <h3>Character = {props.item.Product}</h3>
     <div>{props.item.manufacturer} </div>
     <div>{props.item.videoTitle}</div>
   </div>
  //  </Col>

)

}


export default Card