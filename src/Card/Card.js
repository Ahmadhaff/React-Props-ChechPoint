import React from "react";
import Card from "react-bootstrap/Card";
import Ahmad from './Ahmad.jpg'


function Image({style}) {
  return (
    <div className="Pic" style={style}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Ahmad}/>
      </Card>
    </div>
  );
}

export default Image;
