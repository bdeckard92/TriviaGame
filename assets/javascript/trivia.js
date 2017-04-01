var panel = $("#quiz-area");

var questions = [{
    question: "In 1996 David Hasselhoff was awarded which well deserved honor?",
    answers: ["The Nobel Prize for Complete Awesomeness", "The Academy Award for Greatest Actor Ever....EVER!", "A Hollywood Walk of Fame Star", "The Girl Scout Award for Most Thin Mints Eaten In One Sitting"],
    correctAnswer: "A Hollywood Walk of Fame Star"
}, {
    question: "David Hasselhoff plays a Hero on tv shows and movies (Lifetime Movies are Still MOVIES!), but in what way did he live out his heroism in 1995? ",
    answers: ["He cured cancer by making Chuck Norris Cry (David’s stage portrayal of Eliza Doolittle brought the entire audience to tears)", "He saved a boy from drowning", "He helped save a woman from a car crash", "He actually rescued a boy from drowning and a woman from a car carsh!"],
    correctAnswer: "He actually rescued a boy from drowning and a woman from a car carsh!"
}, {
    question: "From which iconic structure did David Hasselhoff sing “Freedom” on New Years Eve 1989?",
    answers: ["The Eifel Tower", "Inside our hearts", "The Berlin Wall", "Trick question, he’s obviously always in our hearts but he sang from the Berlin Wall"],
    correctAnswer: "Trick question, he’s obviously always in our hearts but he sang from the Berlin Wall"
}, {
    question: "David Hasselhoff has graced not only the screen (small screen) but also the stage. Which Off Off Off Off Broadway roll did he fill?",
    answers: ["Rum Tum Tuger in 'Cats'", "Eliza Doolittle (and actually every other character also) in an all Hasselhoff production of 'My Fair Lady'", "Dr. Frank N Furter in 'The Rocky Horror Picture Show'", "I’m just going to give you a moment to visualize an all Hasselhoff production of 'My Fair Lady' ….glorious isn’t it?!?!"],
    correctAnswer: "Dr. Frank N Furter in 'The Rocky Horror Picture Show'"
}, {
    question: "His return to American Music Fame and Worship was derailed when people changed the channel from his pay per view to watch what event?",
    answers: ["The rebroadcast of the 1946 Middletownship, Indiana sub-regional Spelling Bee", "A channel of dead air that sort of almost looked like it might have been an Cinimax dirty movie being played for free if you turned your head just a little to the right and squinted", "OJ Simpson’s police chase (which ironically it turned out he was only running from the police in order to get home in time to catch the end of David Hasselhoff’s pay per view)", "The “Little House on the Prairie” reunion where it turned out that the entire show was just Bobby Ewing’s dream"],
    correctAnswer: "OJ Simpson’s police chase (which ironically it turned out he was only running from the police in order to get home in time to catch the end of David Hasselhoff’s pay per view)"

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();


        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Time Left: </h2>");

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                panel.append("<input type='radio' name='question-'" + i + "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        panel.append("<button id='done'>Done</button>");
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();

    },

    result: function() {
        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        panel.html("<h2>All Done!</h2>");
        panel.append("<h3>Correct Answers:" + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answer: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

};
$(document).on("click", "#start", function() {
    game.start();
});

$(document).on("click", "#done", function() {
	game.done();

});
