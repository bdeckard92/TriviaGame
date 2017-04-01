var panel = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
    question: "In 1996 David Hasselhoff was awarded which well deserved honor?",
    answers: ["The Nobel Prize for Complete Awesomeness", "The Academy Award for Greatest Actor Ever....EVER!", "A Hollywood Walk of Fame Star", "The Girl Scout Award for Most Thin Mints Eaten In One Sitting"],
    correctAnswer: "A Hollywood Walk of Fame Star",
    image: "assets/images/hasselhoff.png"
}, {
    question: "David Hasselhoff plays a Hero on tv shows and movies (Lifetime Movies are Still MOVIES!), but in what way did he live out his heroism in 1995? ",
    answers: ["He cured cancer by making Chuck Norris Cry (David’s stage portrayal of Eliza Doolittle brought the entire audience to tears)", "He saved a boy from drowning", "He helped save a woman from a car crash", "He actually rescued a boy from drowning and a woman from a car carsh!"],
    correctAnswer: "He actually rescued a boy from drowning and a woman from a car carsh!",
    image: "assets/images/night_rider.png"
}, {
    question: "From which iconic structure did David Hasselhoff sing “Freedom” on New Years Eve 1989?",
    answers: ["The Eifel Tower", "Inside our hearts", "The Berlin Wall", "Trick question, he’s obviously always in our hearts but he sang from the Berlin Wall"],
    correctAnswer: "Trick question, he’s obviously always in our hearts but he sang from the Berlin Wall",
    image: "assets/images/knight.png"
}, {
    question: "David Hasselhoff has graced not only the screen (small screen) but also the stage. Which Off Off Off Off Broadway roll did he fill?",
    answers: ["Rum Tum Tuger in 'Cats'", "Eliza Doolittle (and actually every other character also) in an all Hasselhoff production of 'My Fair Lady'", "Dr. Frank N Furter in 'The Rocky Horror Picture Show'", "I’m just going to give you a moment to visualize an all Hasselhoff production of 'My Fair Lady' ….glorious isn’t it?!?!"],
    correctAnswer: "Dr. Frank N Furter in 'The Rocky Horror Picture Show'",
    image: "assets/images/rescue_tube.png"
}, {
    question: "His return to American Music Fame and Worship was derailed when people changed the channel from his pay per view to watch what event?",
    answers: ["The rebroadcast of the 1946 Middletownship, Indiana sub-regional Spelling Bee", "A channel of dead air that sort of almost looked like it might have been an Cinimax dirty movie being played for free if you turned your head just a little to the right and squinted", "OJ Simpson’s police chase (which ironically it turned out he was only running from the police in order to get home in time to catch the end of David Hasselhoff’s pay per view)", "The Little House on the Prairie reunion where it turned out that the entire show was just Bobby Ewing’s dream"],
    correctAnswer: "OJ Simpson’s police chase (which ironically it turned out he was only running from the police in order to get home in time to catch the end of David Hasselhoff’s pay per view)",
    image: "assets/images/recline_hoff.png"
}];
// creates variable to hold the time left
var timer;
// creates variables for the questions, time counter, and results counters
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    // creates the countdown and calls timeUp
    countdown: function() {
        this.counter--;
        $("#counter-number").html(this.counter);
        if (this.counter === 0) {
            console.log("TIME UP");
            this.timeUp();
        }
    },
    // loades the questions and answers into the panel
    loadQuestion: function() {
        timer = setInterval(this.countdown.bind(this), 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class='answer-button' id='button' 'data-name'" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button><br>");

        }

    },
    nextQuestion: function() {
        this.counter = window.countStartNumber;
        $("#counter-number").html(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
    },

    timeUp: function() {
        clearInterval(window.timer);

        $("#counter-number").html(this.counter);

        panel.html("<h2>Out of Time!");
        panel.append("<h3>Hassel Had! The correct answer was: " + questions[this.currentQuestion].correctAnswer);
        panel.append("img src='" + questions[this.currentQuestion].image + "'/>");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
        } else {
            setTimeout(this.nextQuestion, 3 * 1000);
        }
    },
    results: function() {
        clearInterval(window.timer);

        panel.html("<h2>All done, here's how well you know The Hoff!</h2>");
        $("#counter-number").html(this.counter);

        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        panel.append("<br><button id= 'start-over'>Re-Hash The Hoff?</button>");

    },
    clicked: function(e) {
        clearInterval(window.timer);
        if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        } else {
            this.answeredIncorrectly();
        }
    },
    answeredIncorrectly: function() {
        this.incorrect++;
        clearInterval(window.timer);
        panel.html("<h2>Hassel Huh?</h2>");
        panel.append("<h3>The correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
        panel.append("<img src='" + questions[this.currentQuestion].image + "'/>");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);

        } else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },


    answeredCorrectly: function() {
        this.correct++;
        clearInterval(window.timer);

        


        panel.html("<h2>Hassel Heck Yea!</h2>");
        panel.append("<img src='" + questions[this.currentQuestion].image + "'/>");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);

        } else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },
    reset: function() {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();

    }
};

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
    game.clicked.bind(game, e)();

});

$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
});
