import React from "react";

function Category(props) {
    
    const [number, setNumber] = React.useState(0);
    return (
        <div>
        <p>{props.content} {props.price}</p>
       <p>{number}</p>

       <button onClick={function(){
           setNumber(number+1);
       }}>

           Click to add
       </button>
      
    </div>
    )
}
 export default Category;