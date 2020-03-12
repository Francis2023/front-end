import React, {useState} from 'react';
import axios from "axios";
import {Row} from "reactstrap"
import Card from "./Card"


const Items = () => {

    const [item, setItem] = useState([]);

    axios   
    .get(`https://thereportoftheweek-api.herokuapp.com/reports`)
       
    .then(response => {
         setItem(response.data) 
       })
        
       .catch(error => console.log(error));
       
    console.log(item)

    return (
        <Row>
          {item.map(item => (
             <Card item = {item}  />
          ))}
        </Row>
  
      );

}
export default Items;