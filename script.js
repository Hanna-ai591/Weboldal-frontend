document.addEventListener("DOMContentLoaded",() =>{
    const von =document.getElementById("von") 
    const pontok = document.getElementById("pontok")
    von.addEventListener("click",() => {
        pontok.classList.toggle("show");
    })
    
})
