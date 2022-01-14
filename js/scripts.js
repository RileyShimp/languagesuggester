$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const name = $("input#name").val();

    $(".nameresult").text(name);

    addTo((parseInt($("#music").val()))+(parseInt($("#food").val()))+(parseInt($("#princess").val()))+(parseInt($("#pets").val()))+(parseInt($("#giveUp").val())));
  });
});



function addTo(input) {
  $("#message").hide();
  $("#ruby").hide();
  $("#javascript").hide();
  $("#python").hide();
  $("#cSharp").hide();
  if (input === 0){
    $("#ruby").show();
    $("#message").show();
  }
  else if (input > 0 && input < 200){
    $("#javascript").show();
    $("#message").show();
  }
  else if (input > 200 && input < 2000){
    $("#python").show();
    $("#message").show();
  }
  else {
    $("#cSharp").show();
    $("#message").show();
  }
}