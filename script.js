

const notescontainer = document.querySelector(".notes-container")
const creatbtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-Box")

function shownotes(){
    notescontainer.innerHTML = localStorage.getItem("notes")

}

shownotes();

function updatelocalstorage(){
    localStorage.setItem("notes" , notescontainer.innerHTML)
}
creatbtn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p")
    let img  = document.createElement("img")
    inputBox.setAttribute("contenteditable", "true")
    inputBox.className = "input-Box";
    img.src = "delete.png"
    notescontainer.appendChild(inputBox).appendChild(img)
    
})

notescontainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatelocalstorage()
    }
    else if(e.target.tagName === 'p'){
        notes = document.querySelectorAll(".input-Box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updatelocalstorage();
            }
        })
    }

})