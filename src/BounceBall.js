export class BounceBall {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.speed = speed;
        
        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);

        this.initY = this.y;
    }

    draw(ctx, stageWidth, stageHeight) {
        this.y += this.speed;
        this.bounce(stageHeight);
        ctx.fillStyle = '#fdd900';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounce(stageHeight) {
        if(this.y >= (stageHeight - this.radius) || this.y <= this.initY) {
            this.speed *= -1;
            this.y += this.speed;
        }
    }

}