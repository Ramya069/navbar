let icon=document.querySelector(".bi-list")
let menu=document.querySelector(".menu")
icon.onclick=function(e){
    console.log(e.target)
    menu.classList.toggle("active")
}