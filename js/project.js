const elements = document.querySelectorAll(".game .user-input img");
const userInputElement = document.querySelector(".game .user-input");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");

elements.forEach((element) => {
  element.addEventListener("click", selectElement);
});

function selectElement(e) {
  Element.changeElementsDisplayPadding(e, "none", "2rem");

  userInputElement.classList.add("no-hover");

  Random.randomElement();
  Alert.alertMessage(Result.getResult(e));

  if (Result.getResult(e) === "Comp wins") {
    let compScoreNum = Number(compScore.textContent);
    compScore.textContent = compScoreNum + 1;
  } else if (Result.getResult(e) === "User wins") {
    let userScoreNum = Number(userScore.textContent);
    userScore.textContent = userScoreNum + 1;
  }

  setTimeout(() => {
    Element.changeElementsDisplayPadding(e, "inline-block", "0");
    userInputElement.classList.remove("no-hover");
  }, 900);
}
