$(document).ready(function(){
  // your code goes below
  // $("#clickbox").fadeOut();

  $("#textarea").keypress(function(event){
    if (event.key == "a") {
        $("#body").css( "background-color", "darkgreen");
    } else if (event.key == "f"){
      $("#heading").css("color", "white");
    } else if (event.key == "p"){
      $("#clickbox").fadeIn();
    } else if (event.key == "n"){
      $("#body").fadeOut(3000) && $("#body").fadeIn(3000);
    } else if (event.key == "e"){
      $("#body").append("<p>hello is anyone there?</p>");
    } else if (event.key == "i"){
      $("#textarea").css("margin-left", "80px");
    } else if ( event.key == "s"){
      $("#heading").text("I'M TRAPPED!");
    } else if (event.key == "l"){
      $("#body").css("background-image", "url(images/scaryclown.jpg)");
    } else if (event.key == "w"){
      $("#body").append("<p>would you like to play a game</p>");
    } else if (event.key == "g"){
      $("#body").prepend("<h3>HELP ME!!!</h3>");
    } else if (event.key == "q"){
      $("#textarea").val("");
    } else if (event.key == "o"){
      $("#body").css("background-image", "none");
    }
  })

  $("#clickbox").click(function(){
    $("#body").css("background-color", "black");
    $("#heading").text("YOU'LL NEVER ESCAPE");
    $("#heading").css("color", "white");
    $("#heading").hide()
    $("#heading").fadeIn(3000);
    $("textarea").hide();
  })


})