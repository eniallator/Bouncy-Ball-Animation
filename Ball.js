class Ball {
    constructor(x, y, radius, xVel = 0, yVel = 0) {
        this.x = x
        this.y = y
        this.radius = radius
        this.xVel = xVel
        this.yVel = yVel
    }

    applyGravity(gravity) {
        this.yVel += gravity
    }

    updatePos() {
        this.x += this.xVel
        this.y += this.yVel
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        ctx.fill()
    }
}
