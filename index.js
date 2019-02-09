// User starts the quiz by clicking button
// declare global variables for score & question counter

function startQuiz() {
    //when start button is clicked, hide intro div, displays question/answer
}

// First question is delivered

function renderQuestion() {
    //pulling question from store
    //add to HTML
}

function generateQuestion() {

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
    //startQuiz();
    //renderQuestion(); etc.
}

$(runQuiz);

<section role="article" id="question_Page">
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

<button type="submit">Restart Button</button>