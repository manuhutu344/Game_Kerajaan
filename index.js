const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x:0,
            y: 0
        }
        this.width = 100
        this.height = 100
        this.sides ={
            bottom: this.position.y + this.height
        }
        this.gravity = 1
    }
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y , this.width, this.height)
    }

    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height
        if(this.sides.bottom + this.velocity.y < canvas.height){
                this.velocity.y += this.gravity
            }else this.velocity.y = 0
    }
}


const bacgroundLevel1 = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    imageSrc: "./img/backgroundLevel1.png"
})

const player = new Player()

const keys = {
    w :{
        pressed: false,
    },
    a:{
        pressed: false,
    },
    d:{
        pressed: false,
    }
}
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    bacgroundLevel1.draw()
    player.velocity.x = 0
    if(keys.d.pressed){
        player.velocity.x = 5
    }else if(keys.a.pressed){
        player.velocity.x = -5
    }
    player.draw()
    player.update()
}

animate()

