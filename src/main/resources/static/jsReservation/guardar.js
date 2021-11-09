function agregarReservation(){
    var datos = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        
    };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        
        url:"http://localhost:8080/api/Reservation/save",
       
        
        success:function(response) {
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Reservacion guardada con exito");
            listarReservaciones();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}