const  nombre=document.getElementById('nombretarjeta_input_id');
const img=document.getElementById("imagenpago_input_id");
const formulario=document.getElementById("agregarmetodo_form");
const agregarnombre=document.getElementById("nombre_tarjeta_id");
var selectB=document.getElementById("metodospagos_select_id");

function enviar(){
    //const nombrevar=nombre.value.trim();
    const imgvar=img.value.trim();
    const selected=selectB.value.trim();

    if(selected!=0){
        alert("Se ha enviado su registro");
        formulario.reset();
    }else{
        alert("Seleccione el tipo de pago");
    }
}

function mostrar(){
    var selectBox=document.getElementById("metodospagos_select_id");
    var selectedValue=selectBox.options[selectBox.selectedIndex].value;

    if(selectedValue=="Tarjeta"){
        agregarnombre.innerHTML=" <label class='label' for='nombretarjeta_input_id'>Nombre Lista</label><input type='text' class='form-control' id='nombretarjeta_input_id' name='nombretarjeta_input_name' placeholder='Nombre tarjeta' required=''>"
    }
    else{
        agregarnombre.innerHTML="";
    }
    
}