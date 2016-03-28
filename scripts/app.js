console.log("sanity check");

$(document).ready(function(){

  // $( "html" ).keydown(function() {
  //   alert( "Handler for .keydown() called." );
  // });
  var duck1MarL = 30;
  var duck2MarL = 30;
  var duck1Wins = 0;
  var duck2Wins = 0;
  var quack = new Audio('images/quack.mp3');
  var ducky = new Audio('images/duck.mp3');
  ducky.volume = 0.2;
  var over = false;
    $("html").on("keyup",function(event){
      if(over === true)return;
      if(duck1MarL % 150 === 0){
        ducky.play();
      }
      console.log(event);
      console.log("keydown");
      if(event.keyCode == 70){
        if(duck1MarL < 1100){
          duck1MarL += 10; // every click add 10 to i
          $(".duck1").css("margin-left", duck1MarL);
          console.log(duck1MarL);
          if(duck1MarL === 1100){
            duck1Wins++;
            over = true;
            $(".winner").append('<p id="winner"> DUCK 1 WINS! </p>');
            quack.play();
          }
        }
      }else if(event.keyCode == 74){
        if(over === true)return;
        if(duck2MarL % 150 === 0){
          ducky.play();
        }
        console.log(event);
        console.log("keydown");
        if(duck2MarL < 1100){
          duck2MarL += 10; // every click add 10 to i
          $(".duck2").css("margin-left", duck2MarL);
          console.log(duck2MarL);
          if(duck2MarL === 1100){
            duck2Wins++;
            over = true;
            $(".winner").append('<p id="winner"> DUCK 2 WINS! </p>');
            quack.play();
          }
        }
      }else if(event.keyCode == 49){
        if(over === true)return;
        if(duck2MarL % 150 === 0){
          ducky.play();
        }
        console.log(event);
        console.log("keydown");
        if(duck2MarL < 1100){
          duck2MarL += 100; // every click add 10 to i
          $(".duck2").css("margin-left", duck2MarL);
          console.log(duck2MarL);
          if(duck2MarL === 1100){
            duck2Wins++;
            over = true;
            $(".winner").append('<p id="winner"> DUCK 2 WINS! </p>');
            quack.play();
          }
        }
      }
    $("#score").text(duck1Wins + " " + ':SCORE:' + " " + duck2Wins);
    $(".reset").on("mousedown", function(){
      console.log("reset");
      quack.play();
      $('.duck1').css("margin-left", duck1MarL = 30);
      $('.duck2').css("margin-left", duck2MarL = 30);
      $('#winner').remove();
      over = false;
    });
    $(".clearScore").on("mousedown", function(){
      console.log("reset");
      quack.play();
      $("#score").text('0 :SCORE: 0');
      duck1Wins = 0;
      duck2Wins = 0;
      $('.duck1').css("margin-left", duck1MarL = 30);
      $('.duck2').css("margin-left", duck2MarL = 30);
      $('#winner').remove();
      over = false;
    });
  }//closes keypress
);//closes doc ready
});
