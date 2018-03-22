$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();

    $("#celeb1").hide();
    $("#celeb2").hide();
    $("#celeb3").hide();
    $("#reject").hide();

    var inputAge = parseInt($("#age").val());
    var inputPet = $("input:radio[name=pet]:checked").val();
    var inputFood = $("#food").val();

    if (inputAge >= 30 && inputAge < 65 && inputPet === "cats" && inputFood === "sushi") {
      $("#celeb1").show();
    } else if (inputAge >=65) {
      $("#celeb2").show();
    } else if (inputAge >= 25 && inputAge < 65 && inputPet === "dogs" && inputFood === "burgers") {
      $("#celeb3").show();
    } else {
      $("#reject").show();
    }
  });
});
