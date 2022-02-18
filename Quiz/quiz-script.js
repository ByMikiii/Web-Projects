const question = document.querySelector(".question");
const score = document.querySelector("#score-number");
let questionNumber = 1;

let questions = [
  {
    question:
      "Ktorá krajina má celkovo najviac medailí zo zimných olympijských hier?",
    answer1: "USA",
    answer2: "Nórsko",
    answer3: "Nemecko",
    answer4: "Rusko",
    correct: answer2,
  },
];

function nextQuestion() {
  if (questionNumber < 10) {
    questionNumber++;
    document.getElementById("score-number").innerHTML = questionNumber;
  }
}

function previousQuestion() {
  if (questionNumber > 1) {
    questionNumber--;
    document.getElementById("score-number").innerHTML = questionNumber;
  }
}

document.getElementById("score-number").innerHTML = questionNumber;
