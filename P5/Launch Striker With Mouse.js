class Striker extends Mover {
  constructor(x, y) {
    super(x, y, 30, color(245, 245, 45));
    this.position.x = strikerX;
    this.position.y = strikerY;
    this.velocity = createVector(0, 0);
  }

  setVelocity() {
    let mouseVector = createVector(mouseX - this.position.x, mouseY - this.position.y);
    mouseVector.limit(10); // Limit the velocity to a maximum of 10
    this.velocity = mouseVector;
  }
}
///////////////////////

function draw() {
  background(205);
  fill('#bfe693');
  rect(100, 350, 250, 35, 20);
  
  if (mouseIsPressed) {
    striker.setVelocity();
  }
  
  let allMovers = [striker, queen, ...whiteMovers, ...blackMovers];
  
  // ... rest of the draw function remains the same
}

/////////////////////////////////////////////////////////////////

class Striker extends Mover {
  // ... other methods ...

  show() {
    super.show();
    if (mouseIsPressed) {
      stroke(255, 0, 0);
      line(this.position.x, this.position.y, mouseX, mouseY);
    }
  }
}


