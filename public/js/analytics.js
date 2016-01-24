var socket = io();

socket.on('analytics', function(data) {
  var entry = '<tr class="info"><td>' + moment(data.data.date).format("HH:mm YYYY-MM-DD") + '</td><td>' + data.data.event_name + '</td><td>' + data.data.client + '</td><td>' + data.data.country + '</td></tr>';
  $('#t tr:first').after(entry);
  
  $("tr.info")
    .delay(1000)
    .queue(function(next){ 
      $(this).removeClass("info");
      next(); 
    });
});