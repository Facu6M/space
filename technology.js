const icon = document.getElementById("icon")
const clase = document.getElementById("nav")
const close = document.getElementById("close")

icon.addEventListener("click", function () {
   icon.style.display = "none";
   clase.style.display = "block";
   close.style.display = "block"
})

close.addEventListener("click", function() {
    clase.style.display = "none"
    icon.style.display = "block"
})

const name = document.getElementById("name")
const description = document.getElementById("description")
const imagen = document.getElementById("imagen")

const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")

let names = []
let descriptions = []
let imagenes = []

import data from "./data.json" assert {type: "json"}

data.technology.forEach(element => {
    let nam = element.name
    let desc = element.description
    names.push(nam)
    descriptions.push(desc)

});


console.log(names[2])

uno.addEventListener("click", function() {
    tres.classList.remove("circle")
    tres.classList.add("one")
    dos.classList.remove("circle")
    dos.classList.add("one")
    uno.classList.remove("one")
    uno.classList.add("circle")

 name.innerHTML = `${names[0].toUpperCase()}`
    description.innerHTML = `${descriptions[0]}`
    imagen.src = "./images/image-launch-vehicle-portrait.jpg";
})


dos.addEventListener("click", function() {
    uno.classList.remove("circle")
    uno.classList.add("one")
    tres.classList.remove("circle")
    tres.classList.add("one")
    dos.classList.remove("one")
    dos.classList.add("circle")
    name.innerHTML = `${names[1].toUpperCase()}`
    description.innerHTML = `${descriptions[1]}`
    imagen.src = "./images/image-spaceport-portrait.jpg";
})

tres.addEventListener("click", function() {
    uno.classList.remove("circle")
    uno.classList.add("one")
    dos.classList.remove("circle")
    dos.classList.add("one")
    tres.classList.remove("one")
    tres.classList.add("circle")
    name.innerHTML = `${names[2].toUpperCase()}`
    description.innerHTML = `${descriptions[2]}`
    imagen.src = "./images/image-space-capsule-portrait.jpg";
})
