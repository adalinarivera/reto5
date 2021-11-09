function autoInicioCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })
}
function listarComputer(){
    $.ajax({
        url:"http://localhost:8080/api/Computer/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            listarRespuestaComputer(respuesta);
        }
    });
}

function listarRespuestaComputer(respuesta){

    var myTable=`<table border="1">
                <tr>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Año</th>
                    <th>Descripcion</th>
                    <th colspan="2" align="center">Acciones</th>
                </tr>`;
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='editarComputer("+respuesta[i].id+")'>Editar</button>";
        myTable+="<td> <button onclick='borrarComputer("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#listado").html(myTable);
}
