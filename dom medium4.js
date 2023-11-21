function generateCircles() {
    var circleCount = document.getElementById("circleCount").value;
    var ccontainer = document.getElementById("ccontainer");
    ccontainer.innerHTML = "";
    for (let i = 0; i < circleCount; i++) {
        var circle = document.createElement("div");
        circle.className = "circle";
        circle.style.backgroundColor = getRandomColor();
        ccontainer.appendChild(circle);
    }
}
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 9)];
    }
    return color;
}