(function(win, document) {
  win.colorSwarm = function(canvas) {
    var ctx;
    var circles;
    var tick = 0;
    var numCircles =0.015* canvas.width*canvas.height;

    var chars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ];

    var randomColor = function() {
      var c = [];
      for (var i = 0; i < 6; i++) {
        c.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      return "#" + c.join("");
    };

    var resize = (window.resize = function() {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    });

    var Circle = function(x, y) {
      this.pos = [x, y];
      this.r = 1.5 * Math.random() + 1;
      this.c = randomColor();
      this.v = [(Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3];
    };

    Circle.prototype.getBound = function(i) {
      return i ? canvas.height : canvas.width;
    };

    var i;
    Circle.prototype.frame = function() {
      for (i = 0; i < 2; i++) {
        if (this.pos[i] > this.getBound(i) - 10) {
          this.v[i] *= -1;
        } else if (this.pos[i] < 10) {
          this.v[i] *= -1;
        }
        this.pos[i] += this.v[i] * 10;
      }

      this.draw();
    };

    Circle.prototype.draw = function() {
      ctx.fillStyle = this.c;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.r, 0, 2 * Math.PI, false);
      ctx.fill();
    };

    var start = function() {
      ctx = canvas.getContext("2d");
      resize();

      circles = [];

      for (var i = 0; i < numCircles; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var c = new Circle(x, y, canvas.width, canvas.height);
        c.draw();
        circles.push(c);
      }

      var loop = function() {
        window.requestAnimFrame(loop);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < circles.length; i++) {
          circles[i].frame();
        }
      };

      window.requestAnimFrame = (function() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(a) {
            window.setTimeout(a, 1e3 / 60);
          }
        );
      })();

      loop();
    };

    start();
  };
})(window, document);
document.addEventListener("DOMContentLoaded", function() {
  window.colorSwarm(document.getElementById("colorSwarm"));
});
