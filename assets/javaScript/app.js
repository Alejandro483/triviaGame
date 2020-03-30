$(document).ready(function () {

    alert("Are you ready to play?");

    $("#time").hide();
    $("#start").on('click', trivia.StartGame);
    $(document).on('click', '.opt', trivia.guessChecker);

})

var trivia = {
    correct = 0,
    incorrect = 0,
    timer = 20,
    timerOn = false,
    timerId = "";


}

// // var audio = new Audio("/assets/images/theme.mp3")
// var timer = $("#time")
// var counter = 0;

// setTimeout(timeIsUp, 15000)

// function counterUp() {

//     if (counter === 10) {
//         stop(counter);
//         alert("time is up!");
//         clearInterval(id)

//     }
//     console.log()
//     counter.append("#time")
// }
// function timeIsUp() {
//     console.log("done");
//     $("#time").append("<h2> + Time is up + </h2>");
//     console.log("time up");
//     Audioplay();

// }

// var id = setInterval(counterUp, 1000);


