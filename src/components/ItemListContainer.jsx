import React from "react";

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