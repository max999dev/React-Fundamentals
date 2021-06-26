// class Componetnt
import React from "react";
class Counter extends React.Component {
  state = { count: 1 };

  handleClick(){
      console.log('clicked');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increase</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default Counter;