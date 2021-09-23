class Alert {
  static alertMessage(message) {
    const alert = document.querySelector(".alert");
    alert.querySelector("p").textContent = message;
    alert.classList.add("alert-visible");

    setTimeout(() => {
      alert.classList.remove("alert-visible");
    }, 1000);
  }
}
