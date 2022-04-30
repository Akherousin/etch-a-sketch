const container = document.querySelector(".container");

for (let i = 0; i <= 15; i++) {
  for (let j = 0; j <= 15; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
}
