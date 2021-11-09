function agregarMensaje(){
    var datos = {
        messageText:$("#messageText").val(),
    };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        
        url:"http://localhost:8080/api/Message/save",
       
        
        success:function(respuesta) {
            $("#messageText").val("");
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("Mensaje guardado con exito");
            listarMensaje();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}