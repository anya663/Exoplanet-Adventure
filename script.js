document.getElementById("start-adventure").onclick = function() {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".adventure").style.display = "block";
    loadQuestion();
};

let questions = [
    { question: "What is the distance of Kepler-452 b from Earth?", answer: "1400 light years" },
    { question: "What type of star does Proxima Centauri b orbit?", answer: "Red dwarf" },
    // Add more questions here for TOI-700 d, GJ 1214 b, HD 189733 b, and WASP-121 b.
];

let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion].question;
    } else {
        document.querySelector(".adventure").style.display = "none";
        document.querySelector(".victory").style.display = "block";
    }
}

document.getElementById("next-question").onclick = function() {
    const userAnswer = prompt(questions[currentQuestion].question);
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        alert("Correct! You weakened the villain!");
    } else {
        alert("Wrong answer! Try again!");
    }
    currentQuestion++;
    loadQuestion();
};
