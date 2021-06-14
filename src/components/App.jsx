/**
 *  Copyright 2021 Patrick L. Branson
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React from "react";
import Sketch from "react-p5";

function App() {

  /**
   * The angle of the pendulum
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
   * The weight or bob at the bottom of the pendulum
   */
  let bob;

  /**
   * The length of the rope or metal that holds the pendulum
   */
  let length;

  /**
   * The origin position of where the pendulum hangs on the screen
   */
  let origin;

  /**
   * The force of gravity in the pendulum
   */
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

    // The color of the pendulum weight (bob)
    p5.fill(255, 0, 0);

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
