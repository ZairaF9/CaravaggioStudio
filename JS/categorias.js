const nombre=document.getElementById('nombreCategoria_input_id');
const descrip=document.getElementById('descripCategoria_textarea_id');
const formulario=document.getElementById('crearCategoria_button_id');

function registrar(){
    const nombrevar=nombre.value.trim();
    const descripvar=descrip.value.trim();

    if(nombrevar!="" && descripvar!=""){
        alert("Se ha registrado correctamente");
        formulario.reset();
    }else{
        alert("Llene los datos faltantes")
    }
}
