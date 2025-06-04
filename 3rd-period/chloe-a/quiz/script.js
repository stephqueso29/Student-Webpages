const answers = {
    q1: 'b',
    q2: 'a',
    q3: 'b',
    q4Input: 'pink',
    q5: 'b',
    q6Input: '3',
    q7: 'b',
    q8Input: 'blue whale',
    q9: 'c',
    q10: 'c'
};

let score = 0;
let currentQuestion = 1;

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizForm').style.display = 'block';
    document.getElementById('q1').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

function nextQuestion(questionNumber) {
    const form = document.forms['quizForm'];
    
    let userAnswer;

    if (form['q' + questionNumber]) {
        userAnswer = form['q' + questionNumber].value;
    } else if (form['q' + questionNumber + 'Input']) {
        userAnswer = form['q' + questionNumber + 'Input'].value.trim().toLowerCase();
    }

    if (!userAnswer) {
        alert("Please answer the question.");
        return;
    }

    let correctAnswer = answers['q' + questionNumber] || answers['q' + questionNumber + 'Input'];

    if (userAnswer.toLowerCase() === correctAnswer) {
        score++;
    }

    document.getElementById('q' + questionNumber).style.display = 'none';
    currentQuestion++;

    if (currentQuestion <= 10) {
        document.getElementById('q' + currentQuestion).style.display = 'block';
    }
}

function submitQuiz() {
    const form = document.forms['quizForm'];
    
    let userAnswer;

    if (form['q10']) {
        userAnswer = form['q10'].value;
    } else if (form['q10Input']) {
        userAnswer = form['q10Input'].value.trim().toLowerCase();
    }

    if (!userAnswer) {
        alert("Please answer the question.");
        return;
    }

    let correctAnswer = answers['q10'] || answers['q10Input'];

    if (userAnswer.toLowerCase() === correctAnswer) {
        score++;
    }

    document.getElementById('quizForm').style.display = 'none';

    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.innerHTML = `Your score is: ${score} out of 10`;

    if (score === 10) {
        resultElement.innerHTML += "<br>🎉 Perfect!";
    } else if (score >= 7) {
        resultElement.innerHTML += "<br>👍 Great job!";
    } else if (score >= 4) {
        resultElement.innerHTML += "<br>🙂 Not bad, keep practicing!";
    } else {
        resultElement.innerHTML += "<br>💡 Keep trying, you'll get better!";
    }
}
