const bton = document.getElementById("change-color")
function random(color) {
    return Math.floor(Math.random() * (color + 1));

}
bton.addEventListener("click", function () {
    const rndcol = `rgb(${random(255)}, ${random(255)} , ${random(255)})`;
    document.body.style.backgroundColor = rndcol;
});