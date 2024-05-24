// Ensure this script is the content of your scripts.js file
document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.answer');
    let selectedAnswer = null;

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            if (selectedAnswer) {
                selectedAnswer.classList.remove('selected');
            }
            this.classList.add('selected');
            selectedAnswer = this;
        });



    });

document.getElementById('submit').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    if (!selectedAnswer) {
        resultDiv.textContent = "Please select an answer";
        resultDiv.style.color = "red";
        return;
    }
    // Example check for a correct answer
    const isCorrect = selectedAnswer.textContent === "Royal Flush";
    resultDiv.textContent = isCorrect ? "Correct answer!" : "Wrong answer, try again!";
    resultDiv.style.color = isCorrect ? "green" : "red";
});
});




document.addEventListener('DOMContentLoaded', () => {
    // Assume you have 5 quizzes
    for (let i = 1; i <= 5; i++) {
        attachEventListenersToQuiz(`submit${i}`, `result${i}`);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.answer');
    let selectedAnswer = '';

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            // Remove 'selected' class from all answers
            answers.forEach(ans => ans.classList.remove('selected'));
            // Add 'selected' class to clicked answer
            this.classList.add('selected');
            selectedAnswer = this.textContent;
        });
    });

    document.getElementById('submit-2').addEventListener('click', () => {
        const resultDiv = document.getElementById('result-2');
        // Check if the selected answer is correct
        if (selectedAnswer === "Flush") { // Update the correct answer as per your quiz logic
            resultDiv.textContent = "Correct answer!";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Wrong answer, try again!";
            resultDiv.style.color = "red";
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.answer');
    let selectedAnswer = '';

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            // Remove 'selected' class from all answers
            answers.forEach(ans => ans.classList.remove('selected'));
            // Add 'selected' class to clicked answer
            this.classList.add('selected');
            selectedAnswer = this.textContent;
        });
    });

    document.getElementById('submit-3').addEventListener('click', () => {
        const resultDiv = document.getElementById('result-3');
        // Check if the selected answer is correct
        if (selectedAnswer === "Ace-Ace") { // Update the correct answer as per your quiz logic
            resultDiv.textContent = "Correct answer!";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Wrong answer, try again!";
            resultDiv.style.color = "red";
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.answer');
    let selectedAnswer = '';

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            // Remove 'selected' class from all answers
            answers.forEach(ans => ans.classList.remove('selected'));
            // Add 'selected' class to clicked answer
            this.classList.add('selected');
            selectedAnswer = this.textContent;
        });
    });

    document.getElementById('submit-4').addEventListener('click', () => {
        const resultDiv = document.getElementById('result-4');
        // Check if the selected answer is correct
        if (selectedAnswer === "Ace-Eight of Clubs") { // Update the correct answer as per your quiz logic
            resultDiv.textContent = "Correct answer!";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Wrong answer, try again!";
            resultDiv.style.color = "red";
        }
    });
});
;



document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.answer');
    let selectedAnswer = '';

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            // Remove 'selected' class from all answers
            answers.forEach(ans => ans.classList.remove('selected'));
            // Add 'selected' class to clicked answer
            this.classList.add('selected');
            selectedAnswer = this.textContent;
        });
    });

    document.getElementById('submit-5').addEventListener('click', () => {
        const resultDiv = document.getElementById('result-5');
        // Check if the selected answer is correct
        if (selectedAnswer === "Any five cards of the same suit, not in sequence") { // Update the correct answer as per your quiz logic
            resultDiv.textContent = "Correct answer!";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Wrong answer, try again!";
            resultDiv.style.color = "red";
        }
    });
});



