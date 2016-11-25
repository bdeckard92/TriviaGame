console.log(6+5);


var questionNumber = ['q1','q2','q3','q4','q5'];
var correct = 0;
var wrong = 0;
var unanswered = 0;
var count = 0;
var answerInput = [];
var numCorrect = 0;
var numWrong = 0;




//$(document).ready(function() {

$("#wrong").click(function(){
	console.log(7+5);
	alert("Don't Scoff at The Hoff!!?!");
});

$("#right").click(function(){
	console.log(7+7);
	alert("Hassel Heck Yea!");
});




//window.onload = function

/*$('#start').on("click", function(){
	console.log(5+6);
  var counter = 1;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert('sorry, out of time');
      clearInterval(counter);
    }
  }, 1000);

 });*/

//$("#q1").hide();
//$("#start").click(startGame);

//function showQuestion(){
	//$()
//}
/*function startGame(){
 
	console.log(5+6);
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration
        }
    }, 1000);
};

$(document).on('click', 'button', function() {
	console.log(5);
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#count');
    startGame(fiveMinutes, display);
});
	

	/*$("#start").click( function(){

   var counter = 1;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("count");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         alert('sorry, out of time');
         clearInterval(counter);
       }
     }, 1000);
});*/