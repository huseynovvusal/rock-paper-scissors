class Random {
  static randomElement() {
    const elements = document.querySelectorAll(".game .user-input img");
    const compInput = document.querySelector(".game .comp-input");

    let random = Math.floor(Math.random() * 3);
    let compElement = document.createElement("img");

    compElement.src = elements[random].getAttribute("src");
    compElement.className = elements[random].getAttribute("class");

    compInput.appendChild(compElement);

    setTimeout(() => {
      compElement.remove();
    }, 900);
  }
}
