const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const radius = 20
const maxBalls = 8
let balls

function initBalls(yVel = 0) {
    balls = [new Ball(canvas.width / 2, -radius, radius, 0, yVel)]
}

function updatePhysics() {
    for (let ball of balls) {
        ball.applyGravity(0.2)
        ball.updatePos()
    }
}

function updateSpawning() {
    if (balls.length >= maxBalls) {
        if (balls[0].y - radius >= canvas.height) initBalls(10)
    } else if (balls[0].y + radius >= canvas.height) {
        const newBalls = []
        for (let ball of balls) {
            newBalls.push(new Ball(ball.x, ball.y, radius, 1 / (1 + balls.length / 3), -10))
            newBalls.push(new Ball(ball.x, ball.y, radius, -1 / (1 + balls.length / 3), -10))
        }
        balls = newBalls
    }
}

function run() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let ball of balls) {
        ctx.fillStyle = 'white'
        ball.draw(ctx)
    }

    updatePhysics()
    updateSpawning()

    requestAnimationFrame(run)
}

initBalls()
run()
