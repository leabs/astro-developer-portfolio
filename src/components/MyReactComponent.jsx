import React from "react";
import Draggable from "react-draggable";

export default class MyReactComponent extends React.Component {
  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 55 }}
        position={null}
        grid={[5, 5]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div style={{ textAlign: "center" }}>
          <div className="handle">Click and drag to tip the hat Here</div>
          <div>
            <img src="src/assets/hat.png" alt="hat icon" />
          </div>
        </div>
      </Draggable>
    );
  }
}
