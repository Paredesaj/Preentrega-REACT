import React from "react";

// function ItemListContainer({greetings}) {
//   return (<>
//   <p style={{
//     color:'black',
//     fontSize: '50px',
//     textAlign: 'center',
//     fontWeight : '20px',
//     fontFamily : 'Arial black',
//   }}>
//   </p>

//   <span style={{
//     color: 'orange',
//   }}>
//   {greetings}
//   </span>
//   </>);}
  
//   export default ItemListContainer;

const ItemListContainer = ({ greetings, greetings1 }) => (
    <p style={{
      color: "black",
      fontSize: '50px',
      fontWeight: "20px",
      fontFamily: 'Arial Black',
      textAlign: "center"
    }}>
      {greetings}
    
    <span style={{
      color: 'orange',
      fontSize: '50px',
    }}>
      {greetings1}
    </span>
    </p>
);

export default ItemListContainer;