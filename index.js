const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const radius = 20
const balls = [new Ball(canvas.width / 2, -radius, radius)]

function update() {
    for (let ball of balls) {
        ball.applyGravity(0.2)
        ball.updatePos()
    }
}

function run() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let ball of balls) {
        ctx.fillStyle = 'white'
        ball.draw(ctx)
    }

    update()

    requestAnimationFrame(run)
}

run()
