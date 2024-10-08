const questions = [
    {
        question: "Berapakah hasil dari 9 x 9 = ",
        answers: [
            { Text: "81", correct: true },
            { Text: "82", correct: false },
            { Text: "83", correct: false },
            { Text: "84", correct: false }
        ]
    },
    {
        question: "Berapakah hasil dari 7 x 6 = ",
        answers: [
            { Text: "39", correct: false },
            { Text: "40", correct: false },
            { Text: "41", correct: false },
            { Text: "42", correct: true }
        ]
    },
    {
        question: "Berapakah hasil dari 10 + 1 x 10 = ",
        answers: [
            { Text: "110", correct: false },
            { Text: "11", correct: false },
            { Text: "20", correct: true },
            { Text: "21", correct: false }
        ]
    },
    {
        question: "Berapakah hasil dari 2 + 2 - 1 x 3 = ",
        answers: [
            { Text: "1", correct: true },
            { Text: "2", correct: false },
            { Text: "3", correct: false },
            { Text: "4", correct: false }
        ]
    },
    {
        question: "Berapakah hasil dari 1 + 2 : 2 = ",
        answers: [
            { Text: "1", correct: false },
            { Text: "2", correct: true },
            { Text: "3", correct: false },
            { Text: "4", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');
const reviewSection = document.getElementById('review-section');

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let userAnswers = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    reviewSection.innerHTML = '';
    showQuestion();
}

function showQuestion() {
    answered = false;
    answerButton.innerHTML = '';
    nextButton.style.display = "none";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButton.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    if (answered) return;
    answered = true;

    const buttons = answerButton.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn === button && answer.correct) {
            button.classList.add("correct");
            score++;
            userAnswers.push({ selected: button.innerHTML, correct: true });
        } else if (btn === button && !answer.correct) {
            button.classList.add("wrong");
            userAnswers.push({ selected: button.innerHTML, correct: false });
        }
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButton.innerHTML = '';
    nextButton.innerHTML = "Review Answers";
    nextButton.style.display = "block";
}

function showReview() {
    reviewSection.innerHTML = '<h3>Review of Answers:</h3>';
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answers.find(ans => ans.correct).Text;
        reviewSection.innerHTML += `
            <p><strong>${index + 1}. ${question.question}</strong><br>
            Your Answer: ${userAnswer.selected} (${userAnswer.correct ? 'Correct' : 'Wrong'})<br>
            Correct Answer: ${correctAnswer}</p>
        `;
    });
    nextButton.innerHTML = "Restart";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else if (nextButton.innerHTML === "Review Answers") {
        showReview();
    } else {
        startQuiz();
    }
});

startQuiz();
