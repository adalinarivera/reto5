function autoInicioRelacionCliente(){
    
    $.ajax({
        url:"http://localhost:8080/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
          
            let $select = $("#select-client");
            $.each(respuesta, function (idClient, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
            
            }); 
        }
    
    })
}
function autoInicioComputer(){

    $.ajax({
        url:"http://localhost:8080/api/Computer/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
            let $select = $("#select-computer");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
         
            }); 
        }
    
    })
}
function listarReservaciones(){
    $.ajax({
        url:"http://localhost:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            listarRespuestaReservaciones(respuesta);
        }
    });
}

function listarRespuestaReservaciones(respuesta){

    var myTable=`<table border="1">
                <tr>
                    <th>Fecha Inicial</th>
                    <th>Fecha Devolucion</th>
                    <th>EStado</th>
                    <th colspan="2" align="center">Acciones</th>
                </tr>`;
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td> <button onclick='editarReservaciones("+respuesta[i].idReservation+")'>Editar</button>";
        myTable+="<td> <button onclick='borrarReservaciones("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#listado").html(myTable);
}