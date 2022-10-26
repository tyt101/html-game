let bird = document.querySelector('.bird');
let pipe_top = document.querySelector('.pipe_top')
let pipe_bottom = document.querySelector('.pipe_bottom')
let game_restart = document.querySelector('.game_over')
console.log(game_restart)
let deltaTop = 0;
let birdTop = 200;
let birdRation = 0
let pipe_top_l = 0
let pipe_top_t = 0
let pipe_bottom_l = 300
let pipe_bottom_t = 300
let timer = null
// 游戏初始化操作
function initGame(){
    timer = null
    birdTop = 200
    deltaTop = 0
    birdRation = 0
    pipe_top_l = 0
    pipe_top_t = 0
    pipe_bottom_l = 300
    pipe_bottom_t = 300
    timer = setInterval(runGame, 20);
}
// 游戏运行时
function runGame() {
    // 判断下边界
    if(parseFloat(bird.style.top.slice(0,3)) >= 540){
        clearInterval(timer)
        timer = null
        game_restart.style.display = 'block'
    }
    if(birdTop < 0){
        birdTop = 0
    }
    deltaTop += 0.3
    birdTop += deltaTop 
    // 判断上边界
    bird.style.top = birdTop+'px'
    birdRation += 1
    bird.style.transform = `rotate(${birdRation}deg)`
    pipe_top_l -= 2
    pipe_bottom_l -=2
    if(pipe_top_l <= -88){
        pipe_top_l = 480
        pipe_top.style.top = Math.random()*(200)-300 + 'px'
    }
    if(pipe_bottom_l <= -88){
        pipe_bottom_l = 480
        pipe_bottom.style.top = 1*Math.random()*(-300)+500 + 'px'
    }
    pipe_top.style.left = pipe_top_l + 'px'
    pipe_bottom.style.left = pipe_bottom_l + 'px'
}
initGame()
document.body.addEventListener("click",() => {
    if(timer){
        deltaTop = -10
        birdRation = -15
    }
})
game_restart.addEventListener("click",() => {
    initGame()
    game_restart.style.display = 'none'
    console.log(game_restart.style.display)
})
