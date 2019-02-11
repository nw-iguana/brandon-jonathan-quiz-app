// Questions

const questions = [
    {
        question: "What does Command + Option + H do?",
        answers:[ 
            "Hides all windows except Finder's windows", 
            "Hides the Finder window toolbar", 
            "Opens the Spotlight window",
            "Closes the active window"
        ],
        correctAnswer: "Hides all windows except Finder's windows",
        icon: "",
        alt: ""
    },
    {
        question: "How do you close your current window?",
        answers:[
            "Command + W",
            "Command + Option + Space",
            "Command + Option + H",
            "Command + Shift + U"
        ],
        correctAnswer: "Command + W",
        icon: "",
        alt: ""
    },
    {
        question: "What does Command + M do?",
        answers: [
            "Displays the Connect to Serve dialog",
            "Minimizes the active window",
            "Ejects the selected volume",
            "Duplicates the selected items"
        ],
        correctAnswer: "Minimizes the active window",
        icon: "",
        alt: ""
    },

    {
        question: "How do you select all the items in the active window?",
        answers: [
            "Command + A",
            "Command + I",
            "Command + H",
            "Command + Alt + T"
        ],
        correctAnswer: "Command + A",
        icon: "",
        alt: ""
    },

    {
        question: "How do you capture a screenshot?",
        answers: [
            "Shift + Control + C",
            "Shift + Command + S",
            "Command + Control + 2",
            "Command + Shift + 4"
        ],
        correctAnswer: "Command + Shift + 4",
        icon: "",
        alt: ""
    },

    {
        question: "How do you open the Desktop folder?",
        answers: [
            "Shift + Command + D",
            "Command + Shift + B",
            "Shift + D",
            "Command + D"
        ],
        correctAnswer: "Shift + Command + D",
        icon: "",
        alt: ""
    },

    {
        question: "What does Command + Z do?",
        answers: [
            "Saves a file",
            "Undoes the last step",
            "Quits an application",
            "Selects an item"
        ],
        correctAnswer: "Undoes the last step",
        icon: "",
        alt: ""
    },

    {
        question: "How do you open the spotlight menu?",
        answers: [
            "Shift + O",
            "Shift + Command + Space",
            "Command + Space",
            "Command + O"
        ],
        correctAnswer: "Command + Space",
        icon: "",
        alt: ""
    },

    {
        question: "What does Command + F do?",
        answers: [
            'Opens a search box',
            'Opens a folder',
            'Duplicates a file',
            'Opens a file'
        ],
        correctAnswer: "Opens a search box",
        icon: "",
        alt: ""
    },

    {
        question: "How do you open the emoji keyboard?",
        answers: [
            'Command + 9',
            'Command + Shift',
            'Command + Alt + Delete',
            'Command + Control + Spacebar'
        ],
        correctAnswer: "Command + Control + Spacebar",
        icon: "",
        alt: ""
    }
    
];

const STORE = {
    state: 'startPage',
    numberOfQuestions: questions.length,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0
}

function handleStartButton() {
    //when start button is clicked, hide intro div, displays question/answer
    $('#container').on('click', '.startButton', function(event) {
        console.log('startQuiz runs');
        renderQuestion();
        currentQuestionNumber();
        currentScore();
    });
}

// First question is delivered

function renderQuestion() {
    //pulling question from questions
    let question = questions[STORE.currentQuestion].question;
    let answers = questions[STORE.currentQuestion].answers;
    let html = generateQuestion(question, answers);
    //add to HTML
    $('.startPage').html(html);
}

function generateQuestion(question, answers) {
        return `<div id="questionPage">
            <h2 class="question">
                ${question}
            </h2>
            <div class="answer-selections" role="radiogroup">
                <form id="answer-form">
                    <fieldset> 
                        <br>
                        <label for="radioChecked" class="answer">    
                            <input class="radio" id="radioChecked" type="radio" tabindex="1" name="answer" value="${answers[0]}" required>
                                ${answers[0]}        
                        </label>
                        <br>
                        <label for="radioChecked1" class="answer">    
                            <input class="radio" id="radioChecked1" type="radio" name="answer" value="${answers[1]}">
                                ${answers[1]}</label>
                        <br>
                        <label for="radioChecked2" class="answer">
                            <input class="radio" id="radioChecked2" type="radio" name="answer" value="${answers[2]}">
                                ${answers[2]}</label>
                        <br>
                        <label for="radioChecked3" class="answer">
                            <input class="radio" id="radioChecked3" type="radio" name="answer" value="${answers[3]}">
                                ${answers[3]}</label>
                        <br>
                        <div class="centerButton"><button id="submitButton" tabindex="2">Submit</button></div>
                    </fieldset> 
                </form>
            </div>`
    }     

// User sees which question they're on

function currentQuestionNumber() {
    //display question number on DOM
    let currentNo = STORE.currentQuestion + 1;
    $('.questionCounter').text(`Question: ${currentNo} of ${questions.length}`);
}

// User submits an answer by selecting the radio button
// User clicks submit to confirm answer

function handleSubmitButton() {
    //event listener is listening to user's answer
    $('#container').on('click', '#submitButton', function(event) {
        console.log('user selection runs');
        let answer = $('input[name="answer"]:checked').val();
        if (answer === questions[STORE.currentQuestion].correctAnswer) {
            correctAnswer();
        } else if (answer === undefined) {
            console.log('no answer selected');
        } else {
            incorrectAnswer();
            console.log('incorrect answer selected', answer);
        }
    });
}

// Validate User's answer as correct or incorrect

function correctAnswer() {
    $('#questionPage').html(ifAnswerIsCorrect());
    STORE.correct++;
    currentScore();
}

function incorrectAnswer() {
    $('#questionPage').html(ifAnswerIsWrong());
    STORE.incorrect++;
    currentScore();
}

function ifAnswerIsCorrect() {
    return `<div class="quiz-feedback">Correct!<br>
            <button type="button" class="next-button">NEXT</button></div>`
}

function ifAnswerIsWrong() {
    return `<div class="quiz-feedback incorrectMessage">Incorrect!<br>
            The correct answer is, "${questions[STORE.currentQuestion].correctAnswer}"<br> 
            <button type="button" class="next-button">NEXT</button></div>`
}

// User sees current score

function currentScore() {
    //adding to score variable
    $('.score').text(`Correct: ${STORE.correct} | Incorrect: ${STORE.incorrect}`);
}

function increaseQuestionNumber() {
    STORE.currentQuestion++;
}

// User clicks next to receive next question
// Next question is delivered

function handleNextQuestionButton() {
    //pull next question from STORE
    $('#container').on('click', '.next-button', function(event){
        if (STORE.currentQuestion + 1 < STORE.numberOfQuestions) {
            console.log('next button clicked');
            increaseQuestionNumber();
            generateQuestion(questions[STORE.currentQuestion].question, questions[STORE.currentQuestion].answers);
            renderQuestion();
            currentQuestionNumber();
        } else {
            // User reaches end of quiz
            console.log('end of quiz');
            renderResults();
            percentageScore();
            currentQuestionNumber();
        }
    })
}

// User sees final results depending on score

function generateResults() {
    if (STORE.correct > 8) {
        return `<div class="highScore">
            <h2 class="percentage"></h2>
            <h2 class="blackText">You're a hot key pro!</h2>
            <img src="https://media.giphy.com/media/3kD720zFVu22rfIA0s/giphy.gif">
            <button type="button" class="restartButton">Restart</button></div>`
    } else if (STORE.correct >= 5) {
        return `<div class="highScore">
            <h2 class="percentage"></h2>
            <h2 class="blackText">Almost there. Keep studying.</h2>
            <img src="https://media.giphy.com/media/QNWKbJNASBum8G54t6/giphy.gif">
            <button type="button" class="restartButton">Restart</button></div>`
    } else {
        return `<div class="highScore">
            <h2 class="percentage"></h2>
            <h2 class="blackText">Here are some resources to help you study up.</h2>
            <img src="https://media.giphy.com/media/bpEH21sHkWQQ8/giphy.gif">
            <a class="links" href="https://support.apple.com/en-us/HT201236">Apple's Support</a>
            <a class="links buttonDown" href="http://www.math.harvard.edu/computing/macintro/keys.html">Harvard Mac OS X Shortcuts</a>
        <button type="button" class="restartButton">Restart</button></div>`
    }
}

function renderResults() {
    console.log('end of quiz');
    $('#questionPage').html(generateResults());
}

function generatePercentage() {
    return `${(STORE.correct)/(STORE.numberOfQuestions) * 100}%`
}

function percentageScore() {
    $('.percentage').text(generatePercentage());
}

// User clicks button to restart quiz

function handleRestartButton() {
    //button at the end of quiz to restart/refresh page
    $('#container').on('click', '.restartButton', function(event) {
        console.log('restart button clicked');
        location.reload();
    })
}

function runQuiz() {
    //insert functions to start quiz
    handleStartButton();
    handleSubmitButton();
    handleNextQuestionButton();
    handleRestartButton();
}

$(runQuiz);
