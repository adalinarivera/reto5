$(document).ready(function(){
    $("#btnActualizar").hide();
})

function editarCategoria(numId){
    $("#btnActualizar").show();
    $("#btnGuardar").hide();
    $("#btnListar").hide();
    var datos ={
        id:numId
    };

    $.ajax({
        url:"http://localhost:8080/api/Category/"+numId,
        type: 'GET',
        dataType: "json",

        success:function(respuesta){
            console.log(respuesta);
                $("#numId").val(respuesta.id),
                $("#name").val(respuesta.name),
                $("#description").val(respuesta.description)
        },
        error:function(xhr,status){
            console.log(status);
        },
    });
}

function actualizarCategoria(){
    $("#btnGuardar").show();
    $("#btnListar").show();
    $("#btnActualizar").hide();
    let datos={
        id:$("#numId").val(),
        name:$("#name").val(),
        description:$("#description").val()

    };
    console.log(datos);
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",

        success:function(respuesta){
            $("#name").val("");
            $("#description").val("");
            console.log(respuesta);
            listarCategoria();
            alert("Categoria actualizada con exito");
        },

        error:function(xhr,status){
            console.log(status);
        },


    });

}