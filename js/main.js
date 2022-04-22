const screen = document.getElementById("screen")

let sum = 0

Array.from(document.getElementsByClassName('number-button'))
    .forEach(e=>e.addEventListener('click', (event)=>{
        //if(screen.value!=='0' && sum) return screen.value=0
        screen.value=screen.value*10+Number(event.target.textContent)
    }))

document.getElementById('plus').addEventListener('click', ()=>{
    sum += Number(screen.value)
    screen.value = 0

})

document.getElementById('equals').addEventListener('click', ()=>{
    sum += Number(screen.value)
    screen.value = sum
})