const botao = document.getElementById('button')
let som = new Audio("som/alerta.mp3")

botao.addEventListener('mousedown', (event) => {
    event.preventDefault()
    audio();
})

botao.addEventListener('mouseup', (event) => {
    event.preventDefault()
    audios();
})


function audio() {
    som.play()
}

function audios() {
    som.pause()
}



botao.addEventListener('touchstart', (event) => {
    event.preventDefault()
    audio();
})

botao.addEventListener('touchend', (event) => {
    event.preventDefault()
    audios();
})