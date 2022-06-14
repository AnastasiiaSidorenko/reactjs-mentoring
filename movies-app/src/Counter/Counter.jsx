import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  render() {
    return (
      <div>
        <h2>
          Counter:
          {this.state.counter}
        </h2>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}
