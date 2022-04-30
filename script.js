const container = document.querySelector(".container");

const gridCreator = document.querySelector(".btn-grid-creator");

gridCreator.addEventListener("click", createNewGrid);

function createNewGrid(e) {
  container.innerHTML = "";

  const height = +prompt("select the height of the grid");
  const width = +prompt("select the width of the grid");
  const amountOfBoxes = height * width;

  for (let i = 0; i < amountOfBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${90 / width}rem`;
    box.style.width = `${90 / width}rem`;
    container.appendChild(box);
  }

  container.style.gridTemplateColumns = `repeat(${width}, fit-content(3rem))`;
  container.style.gridTemplateRows = `repeat(${height}, fit-content(3rem))`;
}
