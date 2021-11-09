function borrarCategoria(numId){
    var datos={
        id:numId
    };
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Category/"+numId,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#listado").empty();
            listarCategoria();
            alert("Categoria borrada con exito")
        }
    });

}