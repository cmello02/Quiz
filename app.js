const form = document.querySelector(".quiz-form");
const finalScoreContainer = document.querySelector(".final-score-container");
const span = finalScoreContainer.querySelector("span");

const correctAnswers = ["C", "D", "B", "A"];

let score = 0;

const getUserAnswer = () =>
  correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value);

const calculateScore = (userAnswer) => {
  userAnswer.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index];

    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
};

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  finalScoreContainer.classList.remove("d-none");
};

const animatedFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    span.textContent = `${counter++}%`;
  }, 20);
};

const resetUserScore = () => score = 0

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userAnswer = getUserAnswer();

  resetUserScore()
  calculateScore(userAnswer);
  showFinalScore();
  animatedFinalScore();
});
