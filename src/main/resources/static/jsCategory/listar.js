function listarCategoria(){
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            listarRespuestaCategoria(respuesta);
        }
    });
}

function listarRespuestaCategoria(respuesta){

    var myTable=`<table border="1">
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th colspan="2" align="center">Acciones</th>
                </tr>`;
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='editarCategoria("+respuesta[i].id+")'>Editar</button>";
        myTable+="<td> <button onclick='borrarCategoria("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#listado").html(myTable);
}