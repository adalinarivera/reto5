function borrarReservaciones(numId){
    var datos={
        idReservation:numId
    };
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Reservation/"+numId,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#listado").empty();
            listarReservaciones();
            alert("Reservacion borrada con exito")
        }
    });

}