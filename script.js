const container = document.querySelector(".container");

const gridCreator = document.querySelector(".btn-grid-creator");

gridCreator.addEventListener("click", createNewGrid);

function createNewGrid(e) {
  container.innerHTML = "";

  const height = 10;
  const width = 10;
  //   const height = +prompt("select the height of the grid");
  //   const width = +prompt("select the width of the grid");
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

container.addEventListener("mouseover", changeColor);

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgba(${red}, ${green}, ${blue})`;
}

function changeColor(e) {
  if (!e.target.classList.contains("box")) return;
  let box = e.target;
  box.style.backgroundColor = randomColor();
}
