
const nombre=document.getElementById("nombreProducto_input_id");
const descrip=document.getElementById("descripProductotextarea_id");
const img=document.getElementById("imagenesProducto_input_id");
const video=document.getElementById("videosProducto_input_id");
const cantidad=document.getElementById("cantidadProducto_input_id");
const formulario=document.getElementById("registroProducto_form");

function enviar(){
    const nombrevar=nombre.value.trim();
    const descripvar=descrip.value.trim();
    const videovar=video.value.trim();
    const cantidadvar=cantidad.value.trim();
    const imgfile=img.files;

    if(nombrevar!="" && descripvar!="" && imgfile.length>=3 && videovar!="" && cantidadvar!=""){
        alert("Se ha enviado su registro");
        formulario.reset();

    } else{
        if(imgfile.length<3){
            alert("Llene los datos faltantes");
            alert("Mínimo 3 imágenes");
        }else{
            alert("Llene los datos faltantes");
        }

    }
};
