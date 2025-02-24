const gridSizeButton = document.querySelector(".grid-size");
const defaultColorButton = document.querySelector(".default-color");
const randomColorButton = document.querySelector(".random-color");
const darkColorButton = document.querySelector(".dark-color");
const eraseColorButton = document.querySelector(".erase-color");

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
  let colorChange = false;

  squares.forEach((square) => {
    function changeMouseEvent(color) {
      square.addEventListener("mousedown", (event) => {
        square.style.backgroundColor = color;
        colorChange = true;
        // Prevents mouseover from getting stuck and mouseup not working.
        event.preventDefault();
      });

      square.addEventListener("mouseup", () => {
        colorChange = false;
      });

      square.addEventListener("mouseover", () => {
        if (colorChange) {
          square.style.backgroundColor = color;
        }
      });
    }

    defaultColorButton.addEventListener("click", () => {
      changeMouseEvent("#393E46");
    });

    randomColorButton.addEventListener("click", () => {
      changeMouseEvent(createRandomRGBColor());
    });

    darkColorButton.addEventListener("click", () => {
      let opacity = 0;
      square.addEventListener("mousedown", (event) => {
        square.style.backgroundColor = `rgba(0, 0, 0, ${(opacity += 10)}%)`;
        colorChange = true;
        // Prevents mouseover from getting stuck and mouseup not working.
        event.preventDefault();
      });

      square.addEventListener("mouseup", () => {
        colorChange = false;
      });

      square.addEventListener("mouseover", () => {
        if (colorChange) {
          square.style.backgroundColor = `rgba(0, 0, 0, ${(opacity += 10)}%)`;
        }
      });
    });

    eraseColorButton.addEventListener("click", () => {
      square.style.backgroundColor = "#eee";
    });

    changeMouseEvent("#393E46");
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

// Create random RGB color
function createRandomRGBColor() {
  const rgbValues = [];
  for (let i = 0; i < 3; i++) {
    rgbValues.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${rgbValues.toString()})`;
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
