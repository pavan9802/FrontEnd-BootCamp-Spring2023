const data = [
  {
    question: "Which language runs in a web browser",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    corret: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEls = document.querySelector(".answer");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const currentQuestion = data[currentQuiz];
  questionEl.innerHTML = currentQuestion.question;
  a_text.innerHTML = currentQuestion.a;
  b_text.innerHTML = currentQuestion.b;
  c_text.innerHTML = currentQuestion.c;
  d_text.innerHTML = currentQuestion.d;
}

submitBtn.addEventListener("click"), () => {};

loadQuiz();
