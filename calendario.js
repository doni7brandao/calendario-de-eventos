$(document).ready(function() {
   
   //anexar evento de clique nos botões do mês anterior e seguinte
   $(document).on("click", '.prev', function(event) { 
      var month = $(this).data("prev-month");
      var year = $(this).data("prev-year");
      getCalendar(month,year);
   });
   $(document).on("click", '.next', function(event) { 
      var month = $(this).data("next-month");
      var year = $(this).data("next-year");
      getCalendar(month,year);
   });
});

//chamada ajax para atualizar o calendário
function getCalendar(month,year){
   $.ajax({
      url: "ajax.php",
      type: "POST",
      data:'month='+month+'&year='+year,
      complete: function(data){
         $("#calendar-output").html(data.responseText);
      },
      error: function(xhr,status,error){
         //lidar com erro de ajax aqui
      }
   });
}