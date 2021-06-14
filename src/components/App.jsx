import React from "react";
import Sketch from "react-p5";

function App() {

  /**
   * 
   */
  let angle;

  /**
   * The angle velocity
   */
  let velocity = 0;

  /**
   * The angle acceleration
   */
  let acceleration = 0;

  /**
   * 
   */
  let bob;

  /**
   * 
   */
  let length;

  /**
   * 
   */
  let origin;

  let gravity = 1;

  let setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef);
    p5.frameRate(React.Component.frameRate);

    // Initializes serveral variables
    length = 300;
    angle = Math.PI / 2;
    bob = p5.createVector();
    origin = p5.createVector(300, 0);
  };

  let draw = (p5) => {
    p5.background(0);

    let force = gravity * Math.sin(angle);
    acceleration = (-1 * force) / length;
    velocity += acceleration;
    angle += velocity;

    bob.x = length * Math.sin(angle) + origin.x;
    bob.y = length * Math.cos(angle) + origin.y;

    p5.stroke(255);
    p5.strokeWeight(8);

    p5.fill(127);

    p5.line(origin.x, origin.y, bob.x, bob.y);
    p5.circle(bob.x, bob.y, 64);
  };

  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
