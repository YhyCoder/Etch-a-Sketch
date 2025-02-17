function createGrid() {
  const container = document.querySelector(".container");
  const squareSize = `${100 / 16}%`;
  for(let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.style.border = "2px solid #fff";
    container.appendChild(square);
  }
}

createGrid();