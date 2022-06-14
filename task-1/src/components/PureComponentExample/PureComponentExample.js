import React from "react";

export class PureComponentExample extends React.PureComponent {
  state = {
    number: 10,
  };

  updateNumber = () => {
    this.setState({
      number: 30,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>Current number is: {this.state.number}</h2>
        <button onClick={this.updateNumber}>Update number</button>
      </div>
    );
  }
}
