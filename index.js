// Questions

const questions = [
    {
        question: "What does Command+Option+H do?",
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
            "Command+W",
            "Command+Option+Space",
            "Command+Option+H",
            "Command+Shift+U"
        ],
        correctAnswer: "Command+W",
        icon: "",
        alt: ""
    },
    {
        question: "What does Command+M do?",
        answers: [
            "Displays the Connect to Serve dialog",
            "Minimizes the active window",
            "Ejects the selected volume",
            "Duplicates the selected items"
        ],
        correctAnswer: "Minimizes the active window",
        icon: "",
        alt: ""
    }

// 4. How do you select all the items in the active window?
// a. Command+A (Correct)
// b. Command+I
// c. Command+H
// d. Command+Alt+T

];

const STORE = {
    state: 'startPage',
    numberOfQuestions: questions.length,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0
}

function startQuiz() {
    //when start button is clicked, hide intro div, displays question/answer
    $('.startButton').on('click', function(event) {
        console.log('startQuiz runs');
        //$('.startPage').hide();
        renderQuestion();
    });
}

//startQuiz();

// First question is delivered

function renderQuestion() {
    //pulling question from questions
    let question = questions[STORE.currentQuestion].question;
    let answers = questions[STORE.currentQuestion].answers;
    let correctAnswer = questions[STORE.currentQuestion].correctAnswer;
    let correct = STORE.correct;
    let incorrect = STORE.incorrect;
    let html = generateQuestion(question, answers);
    //add to HTML
    $('.startPage').html(html);
}

function generateQuestion(question, answers) {
    return `<section role="article" id="question_Page">
            <h2 class="question">
                ${question}
            </h2>
            <form>
                <fieldset> 
                    <input type="radio" value="" name="answer1">
                    <label class="">${answers[0]}</label><br>
                    <input type="radio" value="" name="answer2">
                    <label class="">${answers[1]}</label><br>
                    <input type="radio" value="" name="answer3">
                    <label class="">${answers[2]}</label><br>
                    <input type="radio" value="" name="answer4"
                    <label class="">${answers[3]}</label><br>
                    <button class="">Submit</button>
                </fieldset> 
            </form>
        </section>`
}

// User sees which question they're on

function currentQuestionNumber() {
    //display question number on DOM
}

// User submits an answer by selecting the radio button
// User clicks submit to confirm answer

function userAnswerSelection() {
    //event listener is listening to user's answer
}

// Validate User's answer as correct or incorrect

function correctAnswer() {

}

function incorrectAnswer() {

}

// User sees current score

function currentScore() {
    //adding to score variable
}

// User clicks next to receive next question
// Next question is delivered

function serveNextQuestion() {
    //pull next question from STORE
    //based on indexed location in array
    //call renderQuestion()

    // why do you put userSelectAnswer in this function?
}

// Repeat answer submission process
// User reaches end of quiz
// User sees final results depending on score

function renderResults() {
    //provides results at the end of the quiz
}

// User clicks button to restart quiz

function restartQuiz() {
    //button at the end of quiz to restart/refresh page
}

function runQuiz() {
    //insert functions to start quiz
    startQuiz();
    //renderQuestion(); etc.
}

$(runQuiz);

/* <section role="article" id="question_Page">
    <h2 class="question">
        Bacon ipsum dolor amet turkey ham kielbasa 
        swine tail. Flank pork belly tongue boudin. 
    </h2>
    <form>
        <fieldset> 
            <label class=""></label>
            <input type="radio" value="" name="answer1">
            <label class=""></label><br>
            <input type="radio" value="" name="answer2">
            <label class=""></label><br>
            <input type="radio" value="" name="answer3">
            <label class=""></label><br>
            <input type="radio" value="" name="answer4"><br>
            <button class="">Submit</button>
        </fieldset> 
    </form>
</section>

<button type="submit" class="">Next Question</button>

<button type="submit">Restart Button</button> */