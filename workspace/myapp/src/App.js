import React, { Component } from 'react';
import ReactDOM from "react-dom"
import TaskList from "./TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length < this.state.items.length) {
      const realInput = ReactDOM.findDOMNode(this.refs.input);
      realInput.focus();
    }
  }

  render() {
    const { items, text } = this.state;

    return (
      <div>
        <TaskList
          items={items}
          onClickDelete={this.onClickDelete.bind(this)}
          />
        <div>
          <input
            ref="input"
            type="text"
            value={text}
            onChange={(e) => this.setState({ text: e.target.value})}
            onKeyUp={this.onKeyUpInput.bind(this)}
            ></input>
          <input type="submit" value="Add" onClick={this.onClickAddButton.bind(this)}></input>
          <br />
          {items.length === 0 ? null : items.length}
        </div>
      </div>
    );
  }

  onKeyUpInput(e) {
    if (e.keyCode === 13) {
      this.addItem();
    }
  }

  onClickDelete(i, e) {
    const { items } = this.state;
    const newItems = items.concat();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  onClickAddButton() {
    const { items, text } = this.state;
    console.log(text);
    // 入力値がからのばいいは何もしない
    if (text == null || text.length == 0) { return; }
    this.addItem();
  }
  addItem() {
    const { items, text } = this.state;
    const newItems = items.concat([text]);
    this.setState({ items: newItems, text: "" });
  }
}

export default App;
