function agregarComputer(){
    var datos = {
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val(),
    };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        
        url:"http://localhost:8080/api/Computer/save",
       
        
        success:function(respuesta) {
            $("#name").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("Computador guardado con exito");
            listarComputer();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}