aplicacion();

function aplicacion(){

    agregarNota();
    eliminarNota();
    
}


//agregar Nota
function agregarNota(){
    //agregar Nota al doom
    let sumbit=document.getElementById("añadir");

    sumbit.addEventListener("submit",(e)=>{
        let nota=document.getElementById("textarea").value;

        e.preventDefault();
        const li=document.createElement("li");
        const borrar=document.createElement("a");
        borrar.innerText="Borrar";
        borrar.classList="borrar";
        li.innerText=nota;
        li.appendChild(borrar);
        const lista=document.getElementById("lista-notas").appendChild(li);
        agregarLs(nota);
    }); 

    //agregar nota al local Storange
    function agregarLs(nota){
        let notas;
        notas=notasLs();
        notas.push(nota);
        localStorage.setItem("notas",JSON.stringify(notas));


            function notasLs(){
                let notas;
        
                if(localStorage.getItem("notas")===null){
                    notas=[];
                }
                else{
                    notas=JSON.parse(localStorage.getItem("notas"));
                }
                return notas;
            }
    };
        
        

    
}

//borrar nota del Doom

function eliminarNota(){
    const lista=document.getElementById("lista-notas");
    lista.addEventListener("click",(e)=>{
        if(e.target.className==="borrar"){
            e.target.parentElement.remove();
        }


        
    })

}