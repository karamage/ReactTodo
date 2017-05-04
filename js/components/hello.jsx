import React from "react";

export default class Hello extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "hogehoge",
    };
  }
  render() {
    const { name } = this.state
    return (
      <div>
        hello {name} <br />
        hello {name} <br />
        hello {this.state.name} <br />
        <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }
}
