class Result {
  static getResult(e) {
    const compElement = document.querySelector(".game .comp-input img");
    if (e.target.className === "rock" && compElement.className === "paper") {
      return "Comp wins";
    } else if (
      e.target.getAttribute("class") === "paper" &&
      compElement.getAttribute("class") === "scisors"
    ) {
      return "Comp wins";
    } else if (
      e.target.getAttribute("class") === "scisors" &&
      compElement.getAttribute("class") === "rock"
    ) {
      return "Comp wins";
    } else if (
      e.target.getAttribute("class") === "paper" &&
      compElement.getAttribute("class") === "rock"
    ) {
      return "User wins";
    } else if (
      e.target.getAttribute("class") === "scisors" &&
      compElement.getAttribute("class") === "paper"
    ) {
      return "User wins";
    } else if (
      e.target.getAttribute("class") === "rock" &&
      compElement.getAttribute("class") === "scisors"
    ) {
      return "User wins";
    } else {
      return "draw";
    }
  }
}
