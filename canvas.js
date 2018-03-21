//first step -- creating canvas

var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext('2d')
//drawing shapes -- second step

// ctx.fillRect(100,100,200,200)
// ctx.fillRect(400,400,200,200)

// ctx.beginPath()
// ctx.moveTo(200,200)
// ctx.lineTo(800,100)
// ctx.stroke()

// ctx.beginPath()
// ctx.moveTo(300,300)
// ctx.lineTo(800,800)
// ctx.stroke()

// ctx.arc(200,200,40,0,2*Math.PI)
// ctx.fillStyle = 'blue'
// ctx.fill()
// ctx.arc(400,400,40,0,2*Math.PI)
// ctx.fill()

// for(var i=0; i<10; i++){

//     var x = Math.random()*window.innerWidth
//     var y = Math.random()*window.innerHeight
//     ctx.beginPath()
//     ctx.arc(x,y,40,0,2*Math.PI)
//     ctx.stroke();
// }

//third step -- animation
var x = Math.random() * innerWidth;
var y= Math.random()*innerHeight;
function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    ctx.beginPath()
    ctx.arc(x,y,40,0,2*Math.PI)
    ctx.stroke();

    x = x+1;
    y= y+1

}

animate()
