$(document).ready(function(){
    $("#btnActualizar").hide();
})

function editarComputer(numId){
    $("#btnActualizar").show();
    $("#btnGuardar").hide();
    $("#btnListar").hide();
    var datos ={
        id:numId
    };

    $.ajax({
        url:"http://localhost:8080/api/Computer/"+numId,
        type: 'GET',
        dataType: "json",

        success:function(respuesta){
            console.log(respuesta);
                $("#numId").val(respuesta.id),
                $("#name").val(respuesta.name),
                $("#brand").val(respuesta.brand),
                $("#year").val(respuesta.year),
                $("#description").val(respuesta.description)
        },
        error:function(xhr,status){
            console.log(status);
        },
    });
}

function actualizarComputer(){
    $("#btnGuardar").show();
    $("#btnListar").show();
    $("#btnActualizar").hide();
    let datos={
        id:$("#numId").val(),
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val()

    };
    console.log(datos);
    let dataToSend=JSON.stringify(datos);
    $.ajax({
        url:"http://localhost:8080/api/Computer/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",

        success:function(respuesta){
            $("#name").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");
            console.log(respuesta)
            listarComputer();
            alert("Computador actualizado con exito");
        },

        error:function(xhr,status){
            console.log(status);
        },


    });

}


