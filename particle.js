var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext('2d')

function Particle(x,y,radius,dx,dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function(){
        ctx.beginPath()
        ctx.arc(this.x, this.y , this.radius, 0, 2*Math.PI)
        ctx.stroke()
    }

    this.update = function(){
        this.x = this.x +this.dx;
        this.y = this.y+this.dy;
        this.radius =this.radius -0.6;

        if(this.radius >=0){
            this.draw()
        }
        
    }
}

var position = {
    x: 200,
    y: 200
}

function to_happen(event){
    position.x = event.clientX;
    position.y = event.clientY;
}

function resize(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

document.addEventListener('mousemove',to_happen)

document.addEventListener('resize', resize)



// var p1 = new Particle(200,200,40,3,3)
// var p2 = new Particle(200,200,40,-3,-3)

var particle_array = []
function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    var dx = (Math.random()-0.5)*3.5
    var dy = (Math.random()-0.5)*3.5
    particle_array.push(new Particle(position.x,position.y,40,dx,dy))

    for(var i in particle_array){
        particle_array[i].update()
    }
}

animate()