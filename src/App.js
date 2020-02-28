import React from "react";
import "./App.css";
import ListItems from "./ListItems.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
// USE ARROW FUNCTIONS AND THE STATE SYNTAX AS BELOW
class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: ""
    }
  };

  handleInput = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };
  
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  };
  deleteItem = key => {
    // Use destructuring whenver possible
    const { items } = this.state;
    const filteredItem = items.filter(item => item.key !== key);
    this.setState({ items: filteredItem });
  };

  // Good work on updating the todo's 
  setUpdate = (text, key) => {
    // use destructuring + key assignment
    const { items: updatedItems } = this.state
    updatedItems.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({ items: updatedItems });
  };

  render() {
    const { items, currentItem } = this.state;
    return (
      <div className="App" onSubmit={this.addItem}>
        <header>
          <form id="to-do-form">
            <input
              type="tetx"
              placeholder="Enter Text"
              value={currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
