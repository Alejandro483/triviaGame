$(document).ready(function () {

    // target Ids

    const start = document.getElementById("submit");
    const question = document.getElementById("question");
    const choiceA = document.getElementById("A");
    const choiceB = document.getElementById("B");
    const choiceC = document.getElementById("C");
    const counter = document.getElementById("counter");
    const scoreDiv = document.getElementById("scoreContainer");

    // create objects
    let questions = [
        {
            question: "1 Which song best describes the style of Saul Goodman’s office?",
            imgSrc: "img/html.png",
            choiceA: "America the Beautiful",
            choiceB: "Paradise City",
            choiceC: "Panama",
            correct: "A"
        }, {
            question: "2 Walt’s pre-Heisenberg vehicle, the one he runs over the gangsters in, is a…",
            imgSrc: "img/css.png",
            choiceA: "Chevy Citation",
            choiceB: "Pontiac Aztec",
            choiceC: "Ford Explorer",
            correct: "B"
        }, {
            question: "3 When Walt retired from the meth game, how much money did he walk away with?",
            imgSrc: "img/js.png",
            choiceA: "40 million",
            choiceB: "8 million",
            choiceC: "80 million",
            correct: "C"
        }, {
            question: "4 Where is Gus Fring from?",
            imgSrc: "img/js.png",
            choiceA: "Germany",
            choiceB: "Italy",
            choiceC: "Chile",
            correct: "C"
        }, {
            question: "5 Saul’s birth name was…",
            imgSrc: "img/js.png",
            choiceA: "Jimmy McGill",
            choiceB: "Jimmy McCormick",
            choiceC: "JImmy McKay",
            correct: "A"
        }
    ];

    // variables
    var userAnswer = "choice";
    var correctAnswer = "correct";
    var question = "question";



    function choiceListeners() {
        $(".choice").on("click", function () {
            var answer = $(this).attr("id")
            var correct = $("#question").attr("data-correct")

            console.log(answer)
            console.log(correct)
        })

    }

