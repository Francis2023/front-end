import React, {useState,useEffect} from 'react';
import axios from "axios";
//import {Row} from "reactstrap"
import Card from "./Card"


const Items = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {
    axios   
    .get(`https://thereportoftheweek-api.herokuapp.com/reports`)
       
    .then(response => {
        console.log(response.data)
         setItem(response.data) 
       })
        
       .catch(error => console.log(error));
    },[]);
   // console.log(item)
    let Newdata = item.slice(0,4)
    console.log(Newdata)
    console.log(Newdata._id)
    return (
        <div>
       
          {Newdata.map(Newdata => (
             <Card key = {Newdata._id} item = {Newdata}  />
          ))}
      
       </div>
  
      );

}
export default Items;