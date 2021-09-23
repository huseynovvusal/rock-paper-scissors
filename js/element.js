class Element {
  static changeElementsDisplayPadding(e, d, p) {
    elements.forEach((element) => {
      if (e.target.getAttribute("class") !== element.getAttribute("class")) {
        element.style.display = d;
      } else {
        element.style.paddingRight = p;
      }
    });
  }
}
