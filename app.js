var Enemy = function(y) {
  this.x = -150;
  this.y = y;
  this.sprite = 'images/enemy-bug.png';
  this.speed = Math.random() * (400 - 100) + 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if (this.x > 550) {
    this.x = -100;
  }
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Create each enemy with different y parameters
var enemy1 = new Enemy(65);
var enemy2 = new Enemy(150);
var enemy3 = new Enemy(230);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];
allEnemies.push(enemy1);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Player = function() {
  this.sprite = 'images/char-horn-girl.png';
  this.x = 200;
  this.y = 380;
};

Player.prototype.reset = function() {
  console.log("hi there");
  this.x = 200;
  this.y = 380;
};

Player.prototype.update = function() {
  if (this.x < enemy3.x + 80 &&
    this.x + 65 > enemy3.x &&
    this.y < enemy3.y + 50 &&
    80 + this.y > enemy3.y) {
    this.reset();
  };
  if (this.x < enemy2.x + 80 &&
    this.x + 65 > enemy2.x &&
    this.y < enemy2.y + 50 &&
    80 + this.y > enemy2.y) {
    this.reset();
  };
  if (this.x < enemy1.x + 80 &&
    this.x + 65 > enemy1.x &&
    this.y < enemy1.y + 50 &&
    80 + this.y > enemy1.y) {
    this.reset();
  };
  if (this.y === -20) {
    this.reset();
  };
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = new Player();
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.handleInput = function(e) {
  switch (e) {
    case 'up':
      if (this.y - 10 > -20) {
        this.y = this.y - 50;
      }
      break;
    case 'down':
      if (this.y + 10 < 400) {
        this.y = this.y + 50;
      }
      break;
    case 'left':
      if (this.x - 10 > 1) {
        this.x = this.x - 50;
      }
      break;
    case 'right':
      if (this.x + 10 < 400) {
        this.x = this.x + 50;
      }
      break;
  }
};

