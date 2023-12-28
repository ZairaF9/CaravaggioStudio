$.validator.addMethod("soloLetras", function(value, element) {

    return this.optional(element) || /^[ñÑa-zA-ZÀ-ÿ\s]+$/i.test(value);
}, );

$.validator.addMethod("soloNumeros", function(value, element) {

    return this.optional(element) || /^[0-9]+$/i.test(value);
}, );

$("#agregardireccion_form").validate({
    
    errorClass:'text-danger',
    highlight: function(element){
        $(element).closest('input').addClass('border-danger');

        $(element).closest('label.error').addClass('text-danger');
    },
    unhighlight: function(element){
        $(element).closest('input').removeClass('border-danger');
      
    },
    success:function(element){
        $(element).closest('input').addClass('border-success');
    
    },

    rules:{
        ciudad_input_name:{
            required: true,
            soloLetras: true
        },
        estado_input_name:{
            required: true,
            soloLetras: true
        },
        pais_input_name:{
            required: true,
            soloLetras: true
        },
        direccion_textarea_name:{
            required: true
        },
        postal_input_name:{
            required: true,
            soloNumeros:true,
            minlength: 5
        },
        tel_input_name:{
            required: true,
            soloNumeros:true,
            minlength:10
        }
    },
    messages:{
        ciudad_input_name: {
            required: "<i class='fas fa-exclamation-circle'></i> Introduzca la ciudad",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        estado_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su estado",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        pais_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su pais",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        direccion_textarea_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su direccion",
        },
        postal_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su postal",
            soloNumeros: "<i class='fas fa-exclamation-circle'></i> Ingrese solo numeros",
            minlength: "<i class='fas fa-exclamation-circle'></i> Ingrese 5 caracteres"
        },
        tel_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su telefono",
            soloNumeros: "<i class='fas fa-exclamation-circle'></i> Ingrese solo numeros",
            minlength: "<i class='fas fa-exclamation-circle'></i> Ingrese 10 caracteres"
        }
    }
})


$("#continuar_button_id").click(function (){
    if($("#agregardireccion_form").valid() == true){
        
        //alert("Registro Exitoso");

        
        event.preventDefault();

        swal("¡Direccion agregada!", "Guardado", "success")
        .then((value) => {
            if(value == true){
                window.location.href="/Pages/pago_envio_pago.html";
            }
        });
        let formulario = document.getElementById("#agregardireccion_form");
       
        
    
    }else{
        return;
    }
   
    
})