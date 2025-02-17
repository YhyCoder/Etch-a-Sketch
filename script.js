// Create 16 * 16 grid
function createGrid() {
  const squareSize = `${100 / 16}%`;
  for(let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.style.border = "2px solid #fff";
    document.querySelector(".container").appendChild(square);
  }
}

// Change squares color when hover them
function changeSquareColor() {
  createGrid();
  const squares = document.querySelectorAll(".container > div");
  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#393E46";
    });
  });
}

changeSquareColor();