$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    addTo((parseInt($("#music").val()))+(parseInt($("#food").val()))+(parseInt($("#princess").val()))+(parseInt($("#pets").val()))+(parseInt($("#giveUp").val())));
  });
});

function addTo(input) {
  $("#ruby").hide();
  $("#javascript").hide();
  $("#python").hide();
  $("#cSharp").hide();
  if (input === 0){
    $("#ruby").show();
  }
  else if (input > 0 && input < 200){
    $("#javascript").show();
  }
  else if (input > 200 && input < 2000){
    $("#python").show();
  }
  else {
    $("#cSharp").show();
  }
}