let bird = document.querySelector('.bird');
let deltaTop = 0
let birdTop = 200
setInterval(() => {
    deltaTop += 0.3
    birdTop += deltaTop 
    bird.style.top = birdTop+'px'
}, 20);

document.body.addEventListener("click",() => {
    deltaTop = -10
})