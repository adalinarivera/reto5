function borrarMensaje(numId){
    var datos={
        idMessage:numId
    };
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Message/"+numId,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#listado").empty();
            listarMensaje();
            alert("Mensaje borrado con exito")
        }
    });

}