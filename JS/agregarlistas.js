const  nombre=document.getElementById('nombreLista_input_id');
const descrip=document.getElementById("descripLista_textarea_id");
const img=document.getElementById("imagenLista_input_id");
const formulario=document.getElementById("crearLista_form");

function enviar(){
    const nombrevar=nombre.value.trim();
    const descripvar=descrip.value.trim();
    const imgvar=img.value.trim();


    if(nombrevar!="" && descripvar!="" && imgvar!=""){
        alert("Se ha enviado su registro");
        formulario.reset();
    }else{
        alert("Llene los datos faltantes");
    }
}
