import React from "react";
import Item from "./Item";

function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        // <div>{item.title}</div>  // se muestras los elemntos del array
        <Item
          key={item.id} //manipular el elemtno de forma individual
          title={item.title}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
export default List;
