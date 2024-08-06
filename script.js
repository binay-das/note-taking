let notes = document.querySelector(".note");
let add = document.querySelector(".btn");
let note = document.querySelectorAll(".input-box");
let IMG_SRC = "public/delete.png";

let update = () => {
    let noteContent = notes.innerHTML;
    localStorage.setItem("note", note.innerHTML);
}

let show = () => {
    note.innerHTML = localStorage.getItem("note") || '';
};

add.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = IMG_SRC;
    
    notes.appendChild(inputBox).appendChild(img);
});

show();

document.querySelectorAll(".input-box").forEach(note => {
    note.addEventListener("keyup", update);
    note.querySelector("img").addEventListener("click", function() {
        note.remove();
        update();
    });
});