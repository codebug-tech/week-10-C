$(document).ready(function(){
  // your code goes below
  // console.log("fun");

  $("#dareText").hide();

  $("#textArea").keypress(function(event){
    // console.log(event.key);
    if (event.key == "a" || event.key == "A") {
      $("body").css("background-color", "#006400");
    }
    else if (event.key == "f" || event.key == "F") {
      $("h1").css("color", "white");
    }
    else if (event.key == "p" || event.key == "P") {
      $("#dareText").show();
    }
    else if (event.key == "n" || event.key == "N") {
      $("body").fadeOut(2500);
      $("body").fadeIn(2000);
    }
    else if (event.key == "n" || event.key == "N") {
      $("body").fadeOut(2500);
      $("body").fadeIn(2000);
    }
    else if (event.key == "e" || event.key == "E") {
      $("body").append("<p>hello, is anyone there?</p>");
    }
    else if (event.key == "i" || event.key == "I") {
      $("#textArea").css("margin-left","80px");
    }
    else if (event.key == "s" || event.key == "S") {
      $("h1").text("I'M TRAPPED");
    }
    else if (event.key == "l" || event.key == "L") {
      $("body").css("background-image", "url(images/scaryclown.jpg)");
    }
    else if (event.key == "w" || event.key == "W") {
      $("body").append("<p>Would you like to play a game?</p>");
    }
    else if (event.key == "g" || event.key == "G") {
      $("body").prepend("<h3>HELP ME!!!</h3>");
    }
    else if (event.key == "q" || event.key == "Q") {
      $("#textArea").val("");
    }
    else if (event.key == "o" || event.key == "O") {
      $("body").css("background-image", "none");
      $("body").css("background-color", "#006400");
    }
  })

  $("p").click(function(event){
    $("body").css("background-color", "black");
    $("#textArea").hide();
    $("h1").hide();
    $("h1").text("YOU'LL NEVER ESCAPE!");
    $("h1").css("color", "white");
    $("h1").fadeIn(3000);
  });



})