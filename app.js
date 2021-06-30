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

    agregarLocalStorange(nota);
    
}

//AGREGAR A LOCAL STORANGE

function agregarLocalStorange(nota){
    let notas;
    notas=agregarLs();

    notas.push(nota);
    localStorage.setItem("notas", JSON.stringify(notas));
    localStorage.setItem("notas", nota);

}

function agregarLs(){
    let notas;

        if(localStorage.getItem("notas")===null){
            notas=[];
        }
        else{
            notas=JSON.parse(localStorage.getItem("notass"));
        }
        return notas;

}



//ELIMINAR NOTA
function eliminarNota(e){
    e.preventDefault();
    if(e.target.className==="borrar"){
        console.log(e.target.parentElement.remove());
    }
}

