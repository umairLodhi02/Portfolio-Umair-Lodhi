function getElement(query) {
  return document.querySelector(query);
}

function createLi(obj) {
  let li = document.createElement("li");
  return;
}

function addClasses(classes, container) {
  classes.map((c) => {
    container.classList.add(c);
  });
}
export { getElement, addClasses };
