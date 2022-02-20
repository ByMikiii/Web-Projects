const question = document.querySelector(".question");
const score = document.querySelector("#score-number");
var questionNumber = 1;
let questions = [
  {
    ques: "1. Ktorá krajina má celkovo najviac medailí zo zimných olympijských hier?",
    ans1: "USA",
    ans2: "Nórsko",
    ans3: "Nemecko",
    ans4: "Rusko",
    correct: "answer2",
  },
  {
    ques: "2. Vypočítaj dve tretiny z troch štvrtín.",
    ans1: "6/4",
    ans2: "1/3",
    ans3: "1/4",
    ans4: "1/2",
    correct: "answer4",
  },
  {
    ques: "3. Kde sa odohrávali prvé zimné olympijské hry?",
    ans1: "Chamonix, Francúzsko ",
    ans2: "Garmisch-Partenkirchen, Nemecko ",
    ans3: "St. moritz, Švajčiarsko ",
    ans4: "Praha, Česká republika",
    correct: "answer1",
  },
  {
    ques: "4. V ktorom okrese je evidované vozidlo, ktoré má na ŠPZ písmená TR?",
    ans1: "Trenčín",
    ans2: "Tvrdošín",
    ans3: "Trnava",
    ans4: "Turčianske Teplice",
    correct: "answer4",
  },
  {
    ques: "5. V ktorej možnosti sa nachádza združené pomenovanie?",
    ans1: "vlastný byt",
    ans2: "cielené sporenie",
    ans3: "finančný plán",
    ans4: "najrýchlejšie riešenie",
    correct: "answer4",
  },
  {
    ques: "6. Vypočítaj dve tretiny z troch štvrtín.",
    ans1: "6/4",
    ans2: "1/3",
    ans3: "1/4",
    ans4: "1/2",
    correct: "answer4",
  },
  {
    ques: "7. Vypočítaj dve tretiny z troch štvrtín.",
    ans1: "6/4",
    ans2: "1/3",
    ans3: "1/4",
    ans4: "1/2",
    correct: "answer4",
  },
  {
    ques: "8. Vypočítaj dve tretiny z troch štvrtín.",
    ans1: "6/4",
    ans2: "1/3",
    ans3: "1/4",
    ans4: "1/2",
    correct: "answer4",
  },
  {
    ques: "9. Vypočítaj dve tretiny z troch štvrtín.",
    ans1: "6/4",
    ans2: "1/3",
    ans3: "1/4",
    ans4: "1/2",
    correct: "answer4",
  },
  {
    ques: "10. Vypočítaj dve tretiny z troch štvrtín.",
    ans1: "6/4",
    ans2: "1/3",
    ans3: "1/4",
    ans4: "1/2",
    correct: "answer4",
  },
];

checkQuesNumber();

function checkQuesNumber() {
  document.getElementById("question").innerHTML =
    questions[questionNumber - 1].ques;
  document.getElementById("answer1").innerHTML =
    questions[questionNumber - 1].ans1;
  document.getElementById("answer2").innerHTML =
    questions[questionNumber - 1].ans2;
  document.getElementById("answer3").innerHTML =
    questions[questionNumber - 1].ans3;
  document.getElementById("answer4").innerHTML =
    questions[questionNumber - 1].ans4;
}

//BUTTONS
function nextQuestion() {
  if (questionNumber < 10) {
    questionNumber++;
    checkQuesNumber();
  }
}

function previousQuestion() {
  if (questionNumber > 1) {
    questionNumber--;
    checkQuesNumber();
  }
}
