$(document).ready(function(){
    $("#btnActualizar").hide();
})

function editarMensaje(numId){
    $("#btnActualizar").show();
    $("#btnGuardar").hide();
    $("#btnListar").hide();
    var datos ={
        idMessage:numId
    };

    $.ajax({
        url:"http://localhost:8080/api/Message/"+numId,
        type: 'GET',
        dataType: "json",

        success:function(respuesta){
            console.log(respuesta);
                $("#numId").val(respuesta.idMessage),
                $("#messageText").val(respuesta.messageText)
        },
        error:function(xhr,status){
            console.log(status);
        },
    });
}

function actualizarMensaje(){
    $("#btnGuardar").show();
    $("#btnListar").show();
    $("#btnActualizar").hide();
    let datos={
        idMessage:$("#numId").val(),
        messageText:$("#messageText").val()

    };
    console.log(datos);
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",

        success:function(respuesta){
            $("#messageText").val("");
            console.log(respuesta)
            listarMensaje();
            alert("Mensaje actualizado con exito");
        },

        error:function(xhr,status){
            console.log(status);
        },


    });

}