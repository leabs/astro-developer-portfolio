import React from "react";
import Draggable from "react-draggable";
import hat from '../images/hat.png';

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

          <image href="../images/hat.png" height="200" width="200" />
        
        
          </div>
        </div>
      </Draggable>
    );
  }
}
