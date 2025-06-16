const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Jaipur", "Kolkata"],
    correct: "Delhi"
  },
  {
    question: "What is the national animal of India?",
    options: ["Elephant", "Lion", "Tiger", "Cow"],
    correct: "Tiger"
  },
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Lal Bahadur Shastri", "Subhas Chandra Bose", "Jawaharlal Nehru"],
    correct: "Jawaharlal Nehru"
  },
  {
    question: "Who built the Taj Mahal?",
    options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
    correct: "Shah Jahan"
  },
  {
    question: "How many states are there in India? (as of 2024)",
    options: ["28", "29", "30", "27"],
    correct: "28"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const scoreBox = document.getElementById("score-box");

function loadQuestion() {
  const currentQ = questions[currentIndex];
  questionEl.textContent = currentQ.question;
  optionsEl.innerHTML = "";

  currentQ.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(btn, currentQ.correct));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(button, correctAnswer) {
  const allOptions = document.querySelectorAll(".option-btn");
  allOptions.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
    allOptions.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Finished!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreBox.style.display = "block";
  scoreBox.textContent = `🎉 Your Score: ${score}/${questions.length}`;
}

// Load the first question
loadQuestion();
