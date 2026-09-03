const containers = document.querySelectorAll(".mini-container")
let active = 0
total = containers.length
function update(){

    document.querySelector(".mini-container.active").classList.remove("active")
    active = active +1
    if (active === total)
    {
        active = 0
    }

    containers[active].classList.add("active")
}

setInterval(() =>{
    update(1)
}, 5000)