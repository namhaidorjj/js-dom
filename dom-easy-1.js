const btn = document.getElementById("addBtn");
 let i = 0;
 function addBox() {
    i++;
    const box = document.createElement("div");
    
    box.classList.add("box")
    box.innerText = i;

    document.body.appendChild(box);
 }
 btn.addEventListener("click" , addBox)
 box