const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const radius = 20
const balls = [{ x: canvas.width / 2, y: -radius }]

function run() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let ball of balls) {
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, radius, 0, 2 * Math.PI, false)
        ctx.fill()
    }

    requestAnimationFrame(run)
}

run()
