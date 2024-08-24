class Mover {
  // ... existing constructor and other methods ...

  checkCollision(other) {
    let distance = p5.Vector.dist(this.position, other.position);
    if (distance < 25) {  // 25 is the diameter of our circles
      let normal = p5.Vector.sub(other.position, this.position).normalize();
      let relativeVelocity = p5.Vector.sub(this.velocity, other.velocity);
      let separatingVelocity = p5.Vector.dot(relativeVelocity, normal);
      
      if (separatingVelocity < 0) {
        let impulse = 2 * separatingVelocity / (1 + 1);  // Assuming equal mass
        let impulseVec = p5.Vector.mult(normal, impulse);
        
        this.velocity.sub(impulseVec);
        other.velocity.add(impulseVec);
      }
    }
  }
}

function draw() {
  background(215);
  for (let i = 0; i < movers.length; i++) {
    for (let j = i + 1; j < movers.length; j++) {
      movers[i].checkCollision(movers[j]);
    }
    movers[i].update();
    movers[i].checkEdges();
    movers[i].show();
  }
}

