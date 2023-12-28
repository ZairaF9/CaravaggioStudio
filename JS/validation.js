/*--FUNCIONES DE VALIDACIONES EXTRAS QUE NO TIENE EL PLUGIN----------------------------*/

$.validator.addMethod('tresImagenes', function(value, element){
    /*const imgfile=value.files;*/
    return this.optional(element) || element.files.length >= 3
}, "<i class='fas fa-exclamation-circle'></i> Ingrese mínimo tres imagenes");

$.validator.addMethod('strongPassword',function(value,element){
    return this.optional(element) || value.length>=8 &&  value.length<=20 && value.indexOf(" ") < 0
    && /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).*$/.test(value);
}, "<i class='fas fa-exclamation-circle'></i> Ingrese entre 8-20 caracteres, una mayuscula,<br>una minuscula, un digito y un caracter especial.");

$.validator.addMethod("soloLetras", function(value, element) {

    return this.optional(element) || /^[ñÑa-zA-ZÀ-ÿ\s]+$/i.test(value);
}, );

$.validator.addMethod("formatoFecha", function(value, element) {
    let currentTime = new Date(); 
    let valueDate = new Date(value + " 00:00:00");
    return this.optional(element) || valueDate.getTime() < currentTime.getTime();
}, "<i class='fas fa-exclamation-circle'></i> Seleccione una fecha valida");

$.validator.addMethod('selectValidation', function (value) {
    return (value != '0');
}, "<i class='fas fa-exclamation-circle'></i> Seleccione una opción");

/*---VALIDACIONES DE FORMS----------------------------------*/

$("#registro_form").validate({
    
    errorClass:'text-danger',
    highlight: function(element){
        $(element).closest('input').addClass('border-danger');
        
        $(element).closest('select').addClass('border-danger');
        $(element).closest('label.error').addClass('text-danger');
    },
    unhighlight: function(element){
        $(element).closest('input').removeClass('border-danger');
        $(element).closest('select').removeClass('border-danger');
      
    },
    success:function(element){
        $(element).closest('input').addClass('border-success');
        $(element).closest('select').addClass('border-success');
    
    },

    rules:{
        username_input_name:{
            required: true,
            minlength: 3
        },
        nombre_input_name:{
            required: true,
            soloLetras: true
        },
        apellidoP_input_name:{
            required: true,
            soloLetras: true
        },
        apellidoM_input_name:{
            required: true,
            soloLetras: true
        },
        password_input_name:{
            required: true,
            strongPassword: true
        },
        nacimiento_input_name:{
            required: true,
            formatoFecha: true
        },
        genero_select_name:{
            selectValidation: true
        },
        privacidad_select_name:{
            selectValidation: true
        },
        imagen_input_name:{
            required: true,
            extension: "jpg|jpeg|png|ico|bmp"
        },
        correo_input_name:{
            required:true,
            email:true
        }
    },
    messages:{
        username_input_name: {
            required: "<i class='fas fa-exclamation-circle'></i> Introduzca un username",
            minlength: "<i class='fas fa-exclamation-circle'></i> Ingrese al menos 3 caracteres"
        },
        nombre_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su nombre",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        apellidoP_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su apellido",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        apellidoM_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su apellido",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        password_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese una contraseña"
        },
        nacimiento_input_name:{
            required:"<i class='fas fa-exclamation-circle'></i> Ingrese una fecha",
        },
        genero_select_name:{
            required:"<i class='fas fa-exclamation-circle'></i> Seleccione un género"
        },
        privacidad_select_name:{
            required:"<i class='fas fa-exclamation-circle'></i> Seleccione su privacidad"
        },
        imagen_input_name:{
            required:"<i class='fas fa-exclamation-circle'></i> Seleccione una imagen",
            extension:"<i class='fas fa-exclamation-circle'></i> Seleccione un archivo valido"
        },
        correo_input_name:{
            required:"<i class='fas fa-exclamation-circle'></i> Ingrese un email",
            email:"<i class='fas fa-exclamation-circle'></i> Ingrese un correo valido"
        }
    }
})

$("#login_form").validate({
    
    errorClass:'text-danger',
    highlight: function(element){
        $(element).closest('input').addClass('border-danger');
        
        $(element).closest('select').addClass('border-danger');
        $(element).closest('label.error').addClass('text-danger');
    },
    unhighlight: function(element){
        $(element).closest('input').removeClass('border-danger');
        $(element).closest('select').removeClass('border-danger');
      
    },
    success:function(element){
        $(element).closest('input').addClass('border-success');
        $(element).closest('select').addClass('border-success');
    
    },

    rules:{
        username_input_name:{
            required: true
        },
        password_input_name:{
            required: true
        }
    },
    messages:{
        username_input_name: {
            required: "<i class='fas fa-exclamation-circle'></i> Introduzca su username",
        },
        password_input_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese su contraseña"
        }
    }
})

$("#categoria_form").validate({
    
    errorClass:'text-danger',
    highlight: function(element){
        $(element).closest('input').addClass('border-danger');
        
        $(element).closest('select').addClass('border-danger');
        $(element).closest('label.error').addClass('text-danger');
    },
    unhighlight: function(element){
        $(element).closest('input').removeClass('border-danger');
        $(element).closest('select').removeClass('border-danger');
      
    },
    success:function(element){
        $(element).closest('input').addClass('border-success');
        $(element).closest('select').addClass('border-success');
    
    },

    rules:{
        nombreCategoria_input_name:{
            required: true,
            soloLetras: true
        },
        descripCategoria_textarea_name:{
            required: true,
            soloLetras: true
        }
    },
    messages:{
        nombreCategoria_input_name: {
            required: "<i class='fas fa-exclamation-circle'></i> Introduzca un nombre",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        descripCategoria_textarea_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese una descripción",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        }
    }
})

$("#lista_form").validate({
    
    errorClass:'text-danger',
    highlight: function(element){
        $(element).closest('input').addClass('border-danger');
        
        $(element).closest('select').addClass('border-danger');
        $(element).closest('label.error').addClass('text-danger');
    },
    unhighlight: function(element){
        $(element).closest('input').removeClass('border-danger');
        $(element).closest('select').removeClass('border-danger');
      
    },
    success:function(element){
        $(element).closest('input').addClass('border-success');
        $(element).closest('select').addClass('border-success');
    
    },

    rules:{
        nombreLista_input_name:{
            required: true,
            soloLetras: true
        },
        descripLista_textarea_name:{
            required: true,
            soloLetras: true
        },
        privLista_select_name:{
            selectValidation: true
        }
    },
    messages:{
        nombreLista_input_name: {
            required: "<i class='fas fa-exclamation-circle'></i> Introduzca un nombre",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        descripLista_textarea_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese una descripción",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        privLista_select_name:{
            selectValidation: "<i class='fas fa-exclamation-circle'></i> Seleccione la privacidad"
        }
    }
})

$("#producto_form").validate({
    
    errorClass:'text-danger',
    highlight: function(element){
        $(element).closest('input').addClass('border-danger');
        
        $(element).closest('select').addClass('border-danger');
        $(element).closest('label.error').addClass('text-danger');
    },
    unhighlight: function(element){
        $(element).closest('input').removeClass('border-danger');
        $(element).closest('select').removeClass('border-danger');
      
    },
    success:function(element){
        $(element).closest('input').addClass('border-success');
        $(element).closest('select').addClass('border-success');
    
    },

    rules:{
        nombreProducto_input_name:{
            required: true,
            soloLetras: true
        },
        descripProducto_textarea_name:{
            required: true,
            soloLetras: true
        },
        "imagenesProducto_input_name[]":{
            required: true,
            extension: "jpg|jpeg|png|ico|bmp",
            tresImagenes: true
        },
        "videosProducto_input_name[]":{
            required: true,
            extension: "mp4"
        },
        categoriasProducto_select_name:{
            selectValidation: true
        },
        modoVenta_select_name:{
            selectValidation: true
        }
    },
    messages:{
        nombreProducto_input_name: {
            required: "<i class='fas fa-exclamation-circle'></i> Introduzca un nombre",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        descripProducto_textarea_name:{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese una descripción",
            soloLetras: "<i class='fas fa-exclamation-circle'></i> Ingrese solo letras"
        },
        "imagenesProducto_input_name[]":{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese imagenes",
            extension: "<i class='fas fa-exclamation-circle'></i> Ingrese un formato válido",
            tresImagenes: "<i class='fas fa-exclamation-circle'></i> Ingrese mínimo tres imagenes"
        },
        "videosProducto_input_name[]":{
            required: "<i class='fas fa-exclamation-circle'></i> Ingrese mínimo un vídeo",
            extension: "<i class='fas fa-exclamation-circle'></i> Ingrese un formato válido"
        },
        categoriasProducto_select_name:{
            selectValidation: "<i class='fas fa-exclamation-circle'></i> Seleccione mínimo una categoría"
        },
        modoVenta_select_name: {
            selectValidation: "<i class='fas fa-exclamation-circle'></i> Seleccione el modo de venta"
        }

    }
})

/*----MENSAJES DE RESPUESTA (POP UPS) ---------------------------------------*/

$("#editarPerfil_button_id").click(function (){
    if($("#registro_form").valid() == true){
        
        swal("¡Guardado!", "Perfil editado", "success");
    
        event.preventDefault();
        //alert("aaaa");
    }else{
        return;
    }
 
})

$("#crearCategoria_button_id").click(function (){
    if($("#categoria_form").valid() == true){
        
        swal("¡Categoría Creada!", "Guardado", "success");
    
        event.preventDefault();
    }else{
        return;
    }
 
})

$("#crearLista_button_id").click(function (){
    if($("#lista_form").valid() == true){
        
        swal("¡Lista Creada!", "Guardado", "success");
    
        event.preventDefault();
    }else{
        return;
    }
 
})

$("#crearProducto_button_id").click(function (){
    if($("#producto_form").valid() == true){
        
        swal("¡Producto Agregado!", "Guardado", "success");
    
        event.preventDefault();
    }else{
        return;
    }
 
})

$("#registrarAdmin_button_id").click(function (){
    if($("#registro_form").valid() == true){
        
        swal("¡Administrador Registrado!", "Guardado", "success");
    
        event.preventDefault();
    }else{
        return;
    }
 
})

$("#pagar_button_id").click(function (){
   
    swal("¡Compra realizada!", "Pago efectuado", "success")
        .then((value) => {
            if(value == true){
                window.location.href="/Pages/dashboard.html";
            }
        });
    
 
})













