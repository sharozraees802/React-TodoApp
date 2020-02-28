import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

// Use map inside the Return function 
// You can use Fragment if you dont want another extra 
// div on the DOM
function ListItems(props) {
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {props.items.map(item => (
          <div className="list" key={item.key}>
            <p>
              <input
                type="text"
                id={item.key}
                value={item.text}
                onChange={e => {
                  props.setUpdate(e.target.value, item.key);
                }}
              />
              <span>
                <FontAwesomeIcon
                  className="faicon"
                  icon="trash"
                  onClick={() => props.deleteItem(item.key)}
                />
              </span>
            </p>
          </div>
        ))}
      </FlipMove>
    </div>
  );
}
export default ListItems;
