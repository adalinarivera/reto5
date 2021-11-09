function borrarComputer(numId){
    var datos={
        id:numId
    };
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Computer/"+numId,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#listado").empty();
            listarComputer();
            alert("Computador borrado con exito")
        }
    });

}