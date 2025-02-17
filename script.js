const gridSizeButton = document.querySelector(".grid-size");
const randomColorButton = document.querySelector(".random-color");
const defaultColorButton = document.querySelector(".default-color");

// Create grid
function createGrid(userInput) {
  const numberOfSquares = Math.pow(userInput, 2);
  const squareSize = `${100 / userInput}%`;
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.style.border = "2px solid #fff";
    document.querySelector(".container").appendChild(square);
  }
  const squares = document.querySelectorAll(".container > div");
  changeSquareColorMode(squares);
}

// Change squares color when hover them
function changeSquareColorMode(squares) {
  squares.forEach((square) => {
    randomColorButton.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = createRandomHexColor();
      });
    });

    defaultColorButton.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#393E46";
      });
    });

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#393E46";
    });
  });
}

// Ask user for number of squares in grid
function getUserInput() {
  const userInput = prompt(
    "Please enter your number of squares per side for the new grid"
  );
  const userNumericInput = Number(userInput);
  if (userNumericInput > 0 && userNumericInput <= 100) {
    return userNumericInput;
  } else if (userInput !== null) {
    alert("Oops, Please enter a number between 1 and 100!");
  }
}

// Remove the current grid so that a new one can be created
function removeCurrentGrid() {
  const containerParent = document.querySelector(".sketch");
  const container = document.createElement("div");

  containerParent.removeChild(document.querySelector(".container"));
  container.classList.add("container");
  containerParent.appendChild(container);
}

// Create random hex color
function createRandomHexColor() {
  const hexNumbers = "0123456789abcdef";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    hexColor += hexNumbers[randomNumber];
  }
  return hexColor;
}

function changeSquareBackground(square, color) {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = color;
  });
}

// Click to ask for new grid size
gridSizeButton.addEventListener("click", () => {
  const userInput = getUserInput();
  if (userInput) {
    removeCurrentGrid();
    createGrid(userInput);
  }
});

// Create 16 * 16 grid of square for default size
createGrid(16);
