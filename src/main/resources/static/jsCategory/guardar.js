function agregarCategoria(){
    var datos = {
        name:$("#name").val(),
        description:$("#description").val(),
    };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        
        url:"http://localhost:8080/api/Category/save",
       
        
        success:function(response) {
            $("#name").val("");
            $("#description").val("");
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Categoria guardada con exito");
            listarCategoria();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}