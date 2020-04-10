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
    // function choiceListeners() {
    $(".choice").on("click", function () {
        var answer = $(this).attr("id")
        var correct = $("#question").attr("data-correct")

        console.log(answer)
        console.log(correct)
        checkAnswer(answer)
    })

    // }
    const lastQuestion = questions.length - 1;
    let ques = 0;
    let count = 0;
    let questionTime = 30;
    let TIMER;
    let score = 0;
    // let answer = choiceListeners;


    // render a question

    function nextQuest() {
        var q = questions[ques];
        console.log(ques)
        question.setAttribute("data-correct", q.correct)
        question.innerHTML = "<p>" + q.question + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
    }


    // begin
    start.addEventListener("click", startQuiz);

    function startQuiz() {
        $("#submit").hide();
        $("#scoreContainer").empty();
        score = 0;
        ques = 0;
        console.log('started')
        nextQuest();
        Progress();
        // Counter();
        // choiceListeners();
        TIMER = setInterval(Counter, 1000); // 1000ms = 1s
    }

    //  progress
    function Progress() {
        for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
            progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
        }
    }

    // counter

    function Counter() {
        if (count <= questionTime) {
            counter.innerHTML = count;
            count++
        } else {
            count = 0;
        }
    }

    // checkAnswer
    function checkAnswer(answer) {

        if (answer == questions[ques].correct) {
            score++;

            answerIsCorrect();
        } else {

            answerIsWrong();
        }
        count = 0;
        if (ques < lastQuestion) {
            ques++;
            nextQuest();
        } else {
            // end the quiz and show the score
            $("#submit").show();
            clearInterval(TIMER);
            scores();
        }
        console.log(checkAnswer)
    }
    // checkAnswer()
    // answer is correct
    function answerIsCorrect() {

        document.getElementById(ques);
    }

    // answer is Wrong
    function answerIsWrong() {

        document.getElementById(ques);
    }

    // score render
    function scores() {
        scoreDiv.style.display = "block";
        scoreDiv.style.color = "white";
        // calculate the amount of question percent answered by the user
        const scorePerCent = Math.round(100 * score / questions.length);

        // choose the image based on the scorePerCent
        let img = (scorePerCent >= 80) ? "img/5.png" :
            (scorePerCent >= 60) ? "img/4.png" :
                (scorePerCent >= 40) ? "img/3.png" :
                    (scorePerCent >= 20) ? "img/2.png" :
                        "img/1.png";

        // scoreDiv.innerHTML = "<img src="+ img +">";
        scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
    }
    console.log()
});