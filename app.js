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