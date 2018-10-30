class Ball {
    constructor(x, y, radius, xVelocity = 0) {
        this.x = x
        this.y = y
        this.radius = radius
        this.xVelocity = xVelocity
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        ctx.fill()
    }
}
