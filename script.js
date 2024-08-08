let add = document.querySelector("button");
let notes = document.querySelector(".notes");
let editImg = document.querySelector("button img");

function update(){
    const savedNotes = localStorage.getItem("content");
    if(savedNotes){
        const data = JSON.parse(savedNotes);
        data.forEach(noteContent => {
            let note = document.createElement("div");
            note.classList.add("note");
            note.innerHTML = `
                <textarea name="" id="" placeholder="Write your note here">${noteContent}</textarea>
                <img class="del" src="public/delete.png" alt="">
            `;
            notes.appendChild(note);

            note.querySelector(".del").addEventListener("click", function(){
                note.remove();
                saveNotes();
            });

            note.querySelector("textarea").addEventListener("focusout", () => {
                saveNotes();
            });
        });
    }
}
const saveNotes = () => {
    const content = document.querySelectorAll(".note textarea");
    console.log(content);
    const data = [];
    content.forEach((note) => {
        data.push(note.value);
    });

    if (data.length === 0) {
        localStorage.removeItem("content");
    } else {
        localStorage.setItem("content", JSON.stringify(data));
    }

    
}

add.addEventListener("click", function(){
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <textarea name="" id="" placeholder="Write your note here"></textarea>
        <img class="del" src="public/delete.png" alt="">
    `;
    notes.appendChild(note);

    note.querySelector(".del").addEventListener("click", function(){
        note.remove();
        saveNotes();
    });

    note.querySelector("textarea").addEventListener("focusout", () => {
        saveNotes();
    });
});
add.addEventListener("mouseenter", function(){
    editImg.style.transform = "rotateX(20deg)";
})

update();

