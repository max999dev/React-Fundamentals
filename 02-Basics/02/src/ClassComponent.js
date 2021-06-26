import React from "react";

// 1 extending React component
// 2 Render function should be addet as well
class ClassComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello from Class Component</h1>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

export default ClassComponent;
