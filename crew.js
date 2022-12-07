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

const role = document.getElementById("role")
const name = document.getElementById("name")
const bio = document.getElementById("bio")

const primero = document.getElementById("primero")
const segundo = document.getElementById("segundo")
const tercero = document.getElementById("tercero")
const cuarto = document.getElementById("cuarto")

const imagen = document.getElementById("im")

let names = []
let roles = []
let bios = []

import data from "./data.json" assert {type: "json"}

data.crew.forEach(element => {
    let nam = element.name
    let rol = element.role
    let bi = element.bio
    names.push(nam)
    roles.push(rol)
    bios.push(bi)
});

console.log(names)

primero.addEventListener("click", function(){
    name.innerHTML = `${names[3].toUpperCase()}`
    role.innerHTML = `${roles[3].toUpperCase()}`
    bio.innerHTML = `${bios[3]}`
    im.src = "./images/image-anousheh-ansari.png"
})


segundo.addEventListener("click", function(){
    name.innerHTML = `${names[0].toUpperCase()}`
    role.innerHTML = `${roles[0].toUpperCase()}`
    bio.innerHTML = `${bios[0]}`
    im.src = "./images/image-douglas-hurley.webp"
})

tercero.addEventListener("click", function(){
    name.innerHTML = `${names[1].toUpperCase()}`
    role.innerHTML = `${roles[1].toUpperCase()}`
    bio.innerHTML = `${bios[0]}`
    im.src = "./images/image-mark-shuttleworth.png"
})

cuarto.addEventListener("click", function(){
    name.innerHTML = `${names[2].toUpperCase()}`
    role.innerHTML = `${roles[2].toUpperCase()}`
    bio.innerHTML = `${bios[2]}`
    im.src = "./images/image-victor-glover.webp"
})