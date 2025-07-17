const comida= document.getElementsByClassName("comidas")

function eliminar(event){
    event.currentTarget.remove()
}

for(const comida1 of comida){
    comida1.addEventListener('click',eliminar)
}
