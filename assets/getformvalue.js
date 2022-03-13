$(document).ready(function () {
  $("#formbutton").click(function () {
    $("#formvalue").text($("form").serialize());
  });
});

$(".chosen-select").chosen();
$(".chosen-select").chosen({ width: "95%" });
