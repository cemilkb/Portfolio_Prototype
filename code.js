let foot = document.querySelector("#foot")
let i = 0

function rem() {
    foot.classList.remove("tran2")
}
function add() {
    foot.classList.add("tran2")
}


let color = () => {
    let number1 = Math.floor(Math.random() * 255)
    let number2 = Math.floor(Math.random() * 255)
    let number3 = Math.floor(Math.random() * 255)
    let color = `rgb(${number1}, ${number2}, ${number3})`
    foot.style.color = color
    foot.textContent = tech[i]
    i++
    if (i == tech.length) {
        i = 0
    }
}

setTimeout(color, 0)
setInterval(add, 1000)
setInterval(rem, 2000)
setInterval(color, 2000)

let text = document.querySelector("#text")
let j = 0
let yazi = () => {
text.textContent = tech[j]

    j++
    if (j == tech.length) {
        j = 0
    }
}

setInterval(yazi, 3000)