const squer = document.getElementById("cube")
function changecolor() {
    if(squer.style.backgroundColor == "red"){
        squer.style.backgroundColor = "green"
    }
    else {
        squer.style.backgroundColor = "red"
    }
}
const button = document.getElementById("colorchanger");
button.addEventListener("click" , changecolor)