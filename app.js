const lista=document.getElementById("lista-notas");

aplicacion();

function aplicacion(){
    const form=document.getElementById("añadir");
    form.addEventListener("submit",agregarNota);

    lista.addEventListener("click",eliminarNota);
}


function agregarNota(e){

    e.preventDefault();

    const nota=document.getElementById("textarea").value;
    const li=document.createElement("li");
    const borrar=document.createElement("a");

    borrar.classList="borrar";
    borrar.innerText="Borrar";
    li.innerText=nota;
    
    lista.appendChild(li);
    li.appendChild(borrar);
    
}


function eliminarNota(e){
    e.preventDefault();
    if(e.target.className==="borrar"){
        console.log(e.target.parentElement.remove());
    }
}

