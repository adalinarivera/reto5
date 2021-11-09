$(document).ready(function(){
    $("#btnActualizar").hide();
})

function editarReservaciones(numId){
    $("#btnActualizar").show();
    $("#btnGuardar").hide();
    $("#btnListar").hide();
    var datos ={
        idReservation:numId
    };

    $.ajax({
        url:"http://localhost:8080/api/Reservation/"+numId,
        type: 'GET',
        dataType: "json",

        success:function(respuesta){
            console.log(respuesta);
                $("#numId").val(respuesta.idReservation),
                $("#startDate").val(respuesta.startDate),
                $("#devolutionDate").val(respuesta.devolutionDate),
                $("#status").val(respuesta.status)
        },
        error:function(xhr,status){
            console.log(status);
        },
    });
}

function actualizarReservaciones(){
    $("#btnGuardar").show();
    $("#btnListar").show();
    $("#btnActualizar").hide();
    let datos={
        idReservation:$("#numId").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val()

    };
    console.log(datos);
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",

        success:function(respuesta){
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            console.log(respuesta)
            listarReservaciones();
            alert("reservacion actualizada con exito");
        },

        error:function(xhr,status){
            console.log(status);
        },


    });

}