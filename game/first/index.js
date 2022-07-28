const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log("canvas", ctx)
const width = canvas.width;
const height = canvas.height;
const fps = 60;
const frameTime = 1000 / fps;
const player = {
    x: width / 2,
    y: height / 2,
    radius: 10,
    color: '#00ff00',
    speed: 5,
    direction: 0,
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
