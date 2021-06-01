import React from "react";

function List(props) {
  const groceries = props.groceries;
  const listItems = groceries.filter(({purchased}) => purchased).map((grocery) => {

    return (<li key={grocery.id} className="list-group-item">{grocery.name}</li>)
  })
    
  
  return (
    <ul className="list-group">
      {listItems}
    </ul>
  );
}

export default List;
