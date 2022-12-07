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


const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

// TITULO
const title = document.getElementById("indicator");

// TEXTO
const text = document.getElementById("largo");

// DISTANCE

const distance = document.getElementById("distance");

// TRAVEL

const travel = document.getElementById("travel");

// fetch data

// IMAGENES

const imagen = document.getElementById("imagen")

let names = [];
let textos = [];
let distances = [];
let travels = [];

import data from "./data.json" assert {type: "json"}

data.destinations.forEach(element => {
    let name = element.name
    let texto = element.description
    let tra = element.travel
    let dist = element.distance
    travels.push(tra)
    distances.push(dist)
    textos.push(texto)
    names.push(name)
   console.log(element.images)
});




moon.addEventListener("click", function() {

    title.innerHTML = `${names[0].toUpperCase()}`
    text.innerHTML = `${textos[0]}`
    travel.innerHTML = `${travels[0]}`
    distance.innerHTML = `${distances[0]}`
    imagen.src = "./images/image-moon.webp";

    mars.classList.remove("activeP")
    europa.classList.remove("activeP")
    titan.classList.remove("activeP")
    moon.classList.add("activeP");
})

europa.addEventListener("click", function() {

    title.innerHTML = `${names[2].toUpperCase()}`
    text.innerHTML = `${textos[2]}`
    travel.innerHTML = `${travels[2]}`
    distance.innerHTML = `${distances[2]}`
    imagen.src = "./images/image-europa.webp";

    mars.classList.remove("activeP")
    moon.classList.remove("activeP")
    titan.classList.remove("activeP")
    europa.classList.add("activeP");
})

mars.addEventListener("click", function() {

    title.innerHTML = `${names[1].toUpperCase()}`
    text.innerHTML = `${textos[1]}`
    travel.innerHTML = `${travels[1]}`
    distance.innerHTML = `${distances[1]}`
    imagen.src = "./images/image-mars.png";

    europa.classList.remove("activeP")
    moon.classList.remove("activeP")
    titan.classList.remove("activeP")
    mars.classList.add("activeP");
})

titan.addEventListener("click", function() {

    title.innerHTML = `${names[3].toUpperCase()}`
    text.innerHTML = `${textos[3]}`
    travel.innerHTML = `${travels[3]}`
    distance.innerHTML = `${distances[3]}`
    imagen.src = "./images/image-titan.webp";

    europa.classList.remove("activeP")
    moon.classList.remove("activeP")
    mars.classList.remove("activeP")
    titan.classList.add("activeP");
})

