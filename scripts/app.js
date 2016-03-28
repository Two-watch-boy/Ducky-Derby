console.log("sanity check");

$(document).ready(function(){

  // $( "html" ).keydown(function() {
  //   alert( "Handler for .keydown() called." );
  // });
  var duck1MarL = 30;
  var duck2MarL = 30;
  var quack = new Audio('images/quack.mp3');
  var over = false;
    $("html").on("keyup",function(event){
      if(over === true)return;
      console.log(event);
      console.log("keydown");
      if(event.keyCode == 70){
        if(duck1MarL < 1100){
          duck1MarL += 10; // every click add 10 to i
          $(".duck1").css("margin-left", duck1MarL);
          console.log(duck1MarL);
          if(duck1MarL === 1100){
            over = true;
            $(".winner").append('<p id="winner"> DUCK 1 WINS! </p>');
            quack.play();
          }
        }
      }else if(event.keyCode == 74){
        if(over === true)return;
        console.log(event);
        console.log("keydown");
        if(duck2MarL < 1100){
          duck2MarL += 10; // every click add 10 to i
          $(".duck2").css("margin-left", duck2MarL);
          console.log(duck2MarL);
          if(duck2MarL === 1100){
            over = true;
            $(".winner").append('<p id="winner"> DUCK 2 WINS! </p>');
            quack.play();
          }
        }
      }
    $(".btn").on("mousedown", function(){
      console.log("reset");
      quack.play();
      $('.duck1').css("margin-left", duck1MarL = 30);
      $('.duck2').css("margin-left", duck2MarL = 30);
      $('#winner').remove();
      over = false;
    });
  }//closes keypress
);//closes doc ready
});
