

function addTo(input) {
  if (input === 0){
    $("#ruby").show();
  }
  else if (input > 0 && input < 200 ){
    $("#javascript").show();
  }
  else if (input > 200 && input < 2000){
    $("#python").show();
  }
  else if (input > 2000){
    $("#cSharp").show();
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