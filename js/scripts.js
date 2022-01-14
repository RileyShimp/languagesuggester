

function addTo(input) {
  $("#ruby").hide();
  $("#javascript").hide();
  $("#python").hide();
  if (input === 0){
    $("#ruby").show();
  }
  else if (input > 0 && input < 200 ){
    $("#javascript").show();
  }
  else if (input > 200 ){
    $("#python").show();
  }
}


$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    addTo(parseInt($("#music").val()));
    addTo(parseInt($("#food").val()));
    addTo(parseInt($("#princess").val()));
  
  });
});