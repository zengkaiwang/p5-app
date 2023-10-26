let ball;
  
function setup() {
  createCanvas(400, 400);
  // 创建一个Ball对象
  ball = new Ball(width / 2, height / 2);
}

function draw() {
  background(220);
  // 更新并绘制球体
  ball.update();
  ball.display();
}

// 定义一个名为Ball的类
class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.xspeed = random(-2, 2);
      this.yspeed = random(-2, 2);
    }
    
    // 定义一个方法，用于更新球体的位置
    update() {
      this.x += this.xspeed;
      this.y += this.yspeed;
      
      // 碰到边缘就反弹
      if (this.x < 0 || this.x > width) {
        this.xspeed *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.yspeed *= -1;
      }
    }
    
    // 定义一个方法，用于绘制球体
    display() {
      fill(255, 0, 0);
      ellipse(this.x, this.y, 50, 50);
    }
  }
  

  